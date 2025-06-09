import React from 'react';
import useForm from '../hooks/useForm';

function LoginForm() {
  const { values, handleChange, resetForm } = useForm({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Form Submitted:', values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input name="username" value={values.username} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" value={values.password} onChange={handleChange} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
