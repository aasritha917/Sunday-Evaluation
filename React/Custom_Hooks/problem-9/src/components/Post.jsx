import React, { useMemo } from 'react';

const Post = ({ id, title, body, verifyPost = false, onToggle }) => {
  
  const bgColor = useMemo(() => {
    const color = `hsl(${Math.random() * 360}, 70%, 90%)`;
    console.log(`Color generated for post ${id}`);
    return color;
  }, [id]); 

  console.log(`Rendering Post ID: ${id}`);

  return (
    <div style={{
      backgroundColor: bgColor,
      margin: 10,
      padding: 10,
      border: '1px solid #ccc',
    }}>
      <h4>{title}</h4>
      <p>{body}</p>
      <p>Status: <strong>{verifyPost ? '✅ Verified' : '❌ Not Verified'}</strong></p>
      <button onClick={() => onToggle(id)}>
        {verifyPost ? 'Unverify' : 'Verify'}
      </button>
    </div>
  );
};

export default React.memo(Post);
