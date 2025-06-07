import React, { useState } from 'react';

const HabitLogger = () => {
  const [data, setData] = useState({ study: '', breakTime: '', sleep: '', stress: '', focus: '' });

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert('Logged!');
    console.log(data);
  };

  return (
    <div>
      <h3>Log Habits</h3>
      {['study', 'breakTime', 'sleep', 'stress', 'focus'].map(field => (
        <input key={field} name={field} placeholder={field} onChange={handleChange} />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default HabitLogger;