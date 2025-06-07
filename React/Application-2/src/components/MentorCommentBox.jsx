import React, { useState } from 'react';

const MentorCommentBox = () => {
  const [comment, setComment] = useState('');
  const [focus, setFocus] = useState('');

  return (
    <div>
      <textarea
        rows={2}
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Add a positive comment"
      />
      <input
        value={focus}
        onChange={e => setFocus(e.target.value)}
        placeholder="Suggest a focus area"
      />
      <button onClick={() => alert('Comment submitted!')}>Submit</button>
    </div>
  );
};

export default MentorCommentBox;