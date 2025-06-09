import React from 'react';
import useToggleItems from './hooks/useToggleItems';

function App() {
  const [item, toggleItem] = useToggleItems(["A", "B", "C", "D"], 1);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial',marginLeft:"400px" }}>
      <h1>useToggleItems Hook</h1>
      <h2>Current Item: {item}</h2>
      <button onClick={toggleItem}>Toggle Item</button>
    </div>
  );
}

export default App;
