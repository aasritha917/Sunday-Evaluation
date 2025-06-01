import { useReducer } from 'react';
import './App.css';

const initialState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
 
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Counter: {state.count}</h1>

      <button 
        onClick={() => dispatch({ type: 'INCREMENT' })} 
        style={{ padding: '10px 20px', margin: '10px', fontSize: '16px' }}
      >
        Increment
      </button>

      <button 
        onClick={() => dispatch({ type: 'DECREMENT' })} 
        style={{ padding: '10px 20px', margin: '10px', fontSize: '16px' }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
