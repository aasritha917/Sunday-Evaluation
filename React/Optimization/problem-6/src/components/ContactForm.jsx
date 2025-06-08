import React from 'react';
import useForm from '../hooks/useForm';

const ContactForm = () => {
  const { values, handleChange, resetForm } = useForm({
    name: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${values.name}, Email: ${values.email}`);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input name="name" value={values.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input name="email" value={values.email} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
