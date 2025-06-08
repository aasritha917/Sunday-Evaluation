import React from 'react';
import useToggleItems from './hooks/useToggleItems';

const App = () => {
  const [item, toggleItem] = useToggleItems(["A", "B", "C", "D"], 1); 

  return (
    <div style={{ textAlign: 'center', marginLeft: '400px' }}>
      <h1>useToggleItems Hook</h1>
      <h2>Current Item: {item}</h2>
      <button onClick={toggleItem} style={{color:'red'}}>Toggle</button>
    </div>
  );
};

export default App;
