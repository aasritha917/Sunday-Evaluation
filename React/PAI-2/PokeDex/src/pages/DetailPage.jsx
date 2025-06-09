import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import ErrorBanner from '../components/ErrorBanner';
import axios from 'axios';

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => {
        setPokemon(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch Pokémon');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorBanner message={error} />;

  return (
    <div className="p-4">
      <button className="mb-4" onClick={() => navigate('/')}>Back to Dashboard</button>
      <h1 className="text-2xl font-bold">{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div>Height: {pokemon.height}</div>
      <div>Weight: {pokemon.weight}</div>
      <div>Abilities: {pokemon.abilities.map(a => a.ability.name).join(', ')}</div>
      <div>Moves: {pokemon.moves.slice(0, 5).map(m => m.move.name).join(', ')}</div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {Object.values(pokemon.sprites)
          .filter(s => typeof s === 'string')
          .map((src, i) => (
            <img key={i} src={src} alt={`sprite-${i}`} />
          ))}
      </div>
    </div>
  );
}
