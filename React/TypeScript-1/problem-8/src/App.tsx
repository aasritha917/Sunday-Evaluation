import React from 'react';
import PostList from './components/PostList';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>React + TypeScript API Demo</h1>
      <PostList />
    </div>
  );
};

export default App;
