import React, { useEffect, useState } from 'react';

// Define the type for a Post
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data: Post[] = await res.json();
        setPosts(data);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error');
        }
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts List</h2>
      {posts.slice(0, 10).map(post => (
        <div key={post.id} style={styles.card}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#f9f9f9',
  },
};

export default PostList;
