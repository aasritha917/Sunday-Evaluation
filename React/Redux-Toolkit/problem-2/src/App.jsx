import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./features/counter/counterSlice";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <div className="btn-group">
        <button onClick={() => dispatch(increment())}>+ Increment</button>&nbsp;&nbsp;
        <button onClick={() => dispatch(decrement())}>- Decrement</button>&nbsp;&nbsp;
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}