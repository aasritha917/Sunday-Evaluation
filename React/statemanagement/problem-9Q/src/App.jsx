import { useReducer } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
  submitted: false
};

function reducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "submit":
      return { ...state, submitted: true };
    case "reset":
      return initialState;
    default:
      throw new Error("invalid action type");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      dispatch({ type: "submit" });
    }
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Enter email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "password", payload: e.target.value })
            }
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button type="submit">Submit</button>{" "}
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      <div style={{ marginTop: "20px" }}>
        {!state.submitted ? (
          <div>No details found</div>
        ) : (
          <div>
            <div>User Email: {state.email}</div>
            <div>User Password: {state.password}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
