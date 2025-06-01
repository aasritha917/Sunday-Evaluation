import { useReducer } from 'react';
import './App.css';

const initialState = {
  isVisible: false
};
function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <button
        onClick={() => dispatch({ type: 'TOGGLE_VISIBILITY' })}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Toggle Message
      </button>

      {state.isVisible && (
        <h2 style={{ marginTop: '20px', color: 'green' }}>Hello, World!</h2>
      )}
    </div>
  );
}

export default App;
