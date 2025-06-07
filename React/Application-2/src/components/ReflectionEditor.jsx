import React, { useState } from 'react';

const ReflectionEditor = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <h3>Reflection</h3>
      <textarea rows={4} value={text} onChange={e => setText(e.target.value)} placeholder="Write in markdown..." />
    </div>
  );
};

export default ReflectionEditor;