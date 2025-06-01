import React, { useRef, useState } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = '#fff5b1';
    setFocused(true);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2>useRef Focus Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <br />
      <button
        onClick={handleClick}
        style={{ marginTop: '10px', padding: '8px 16px' }}
      >
        Focus Input
      </button>

      {focused && (
        <p style={{ marginTop: '10px', color: 'green', fontWeight: 'bold' }}>
          Focused!
        </p>
      )}
    </div>
  );
}

export default FocusInput;
