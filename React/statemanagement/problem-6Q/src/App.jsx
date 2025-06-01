import { useReducer } from 'react';
import './App.css';

const initialState = {
  theme: 'light',
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const appStyle = {
    backgroundColor: state.theme === 'light' ? '#ffffff' : '#1e1e1e',
    color: state.theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <div style={appStyle}>
      <h1>{state.theme.toUpperCase()} MODE</h1>
      <button
        onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
        style={{
          padding: '10px 20px',
          background: state.theme === 'light' ? '#000' : '#fff',
          color: state.theme === 'light' ? '#fff' : '#000',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
