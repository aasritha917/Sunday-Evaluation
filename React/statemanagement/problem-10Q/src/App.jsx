import React, { useReducer, useState } from "react";

const initialState = {
  name: "",
  year: "",
  address: "",
  courses: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
    case "year":
    case "address":
    case "courses":
      return { ...state, [action.type]: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("invalid action type");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (type) => (e) => {
    try {
      dispatch({ type, payload: e.target.value });
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
    setSubmitted(false);
    setError("");
  };

  return (
    <div style={{ padding: "20px"}}>
      <h2>College Form</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="College Name" onChange={handleChange("name")} value={state.name} /><br /><br />
        <input placeholder="Establishment Year" onChange={handleChange("year")} value={state.year} /><br /><br />
        <input placeholder="Address" onChange={handleChange("address")} value={state.address} /><br /><br />
        <input placeholder="Courses (comma separated)" onChange={handleChange("courses")} value={state.courses} /><br /><br />
        <button type="submit">Submit</button>{" "}
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {submitted && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3>College Details</h3>
          <p><strong>Name:</strong> {state.name}</p>
          <p><strong>Year:</strong> {state.year}</p>
          <p><strong>Address:</strong> {state.address}</p>
          <p><strong>Courses:</strong> {state.courses}</p>
        </div>
      )}
    </div>
  );
}
