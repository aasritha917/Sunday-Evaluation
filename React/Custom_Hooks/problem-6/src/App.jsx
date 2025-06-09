import React from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div style={{ padding: '20px',marginLeft:"500px" }}>
      <LoginForm />
      <hr />
      <SignupForm />
    </div>
  );
}

export default App;
