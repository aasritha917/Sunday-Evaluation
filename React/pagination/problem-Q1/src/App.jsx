import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const currentPage = useRef(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCharacters = async (page) => {
    setLoading(true);
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await res.json();
      setCharacters(data.results);
      setTotalPages(data.info.pages);
      setLoading(false);
    } catch (err) {
      setError('Failed to load characters');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage.current);
  }, []);

  const handlePageChange = (page) => {
    currentPage.current = page;
    fetchCharacters(page);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Rick and Morty Characters</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
        {characters.map((char) => (
          <div key={char.id} style={{ border: '1px solid #ccc', padding: 10, borderRadius: 5 }}>
            <img src={char.image} alt={char.name} style={{ width: '100%' }} />
            <h4>{char.name}</h4>
            <p>Status: {char.status}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          const isActive = page === currentPage.current;
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              style={{
                marginRight: 5,
                padding: '5px 10px',
                backgroundColor: isActive ? 'blue' : 'lightgray',
                color: isActive ? 'white' : 'black',
                border: 'none',
                borderRadius: 3,
                cursor: 'pointer'
              }}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;

