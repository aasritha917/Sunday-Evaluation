import React from "react";
import { db } from "../firebase";
import { ref, onValue, set, remove } from "firebase/database";


export default function FilterSort({ category, setCategory, sortKey, setSortKey, sortOrder, setSortOrder }) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>All</option>
        <option>Sweet</option>
        <option>Savory</option>
        <option>Beverage</option>
        <option>Baked</option>
      </select>
      <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
}
