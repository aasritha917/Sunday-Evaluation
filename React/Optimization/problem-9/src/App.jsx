import React, { useState, useEffect, useCallback } from 'react';
import Post from './components/Post';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const addPost = () => {
    if (!title || !body) return;
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts(prev => [...prev, newPost]);
    setTitle('');
    setBody('');
  };

  const toggleVerify = useCallback((id) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);

  return (
    <div style={{ padding: 20, marginLeft:'450px' }}>
      <h2>⏱ Timer: {timer}</h2>
      <div>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        /><br/>
        <br/>
        <input
          placeholder="Body"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <br/>
        <br/>
        <button onClick={addPost}>Add Post</button>
      </div>

      <div style={{ marginTop: 20 }}>
        {posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            verifyPost={post.verifyPost}
            onToggle={toggleVerify}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
