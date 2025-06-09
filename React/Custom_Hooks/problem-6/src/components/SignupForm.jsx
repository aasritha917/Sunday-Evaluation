import React from 'react';
import useForm from '../hooks/useForm';

function SignupForm() {
  const { values, handleChange, resetForm } = useForm({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Form Submitted:', values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div>
        <label>Name:</label>
        <input name="name" value={values.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input name="email" value={values.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" value={values.password} onChange={handleChange} />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
