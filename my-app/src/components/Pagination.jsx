import React from "react";
import { db } from "../firebase";
import { ref, onValue, set, remove } from "firebase/database";


export default function Pagination({ total, current, setCurrent }) {
  return (
    <div style={{ marginTop: 20 , padding:"20px"}}>
      <button onClick={() => setCurrent(current - 1)} disabled={current === 1}>Prev</button>
      {Array.from({ length: total }, (_, i) => (
        <button key={i} onClick={() => setCurrent(i + 1)} disabled={current === i + 1}>{i + 1}</button>
      ))}
      <button onClick={() => setCurrent(current + 1)} disabled={current === total}>Next</button>
    </div>
  );
}