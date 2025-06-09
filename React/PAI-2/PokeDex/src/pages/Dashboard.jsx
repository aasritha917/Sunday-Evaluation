import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../features/pokemon/pokemonSlice';
import Loader from '../components/Loader';
import ErrorBanner from '../components/ErrorBanner';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { data, status, error, filters, sort, offset } = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon(offset));
  }, [dispatch, offset]);

  const filtered = data.filter(p =>
    filters ? p.types.some(t => t.type.name === filters) : true
  );

  const sorted = [...filtered].sort((a, b) =>
    sort === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  if (status === 'loading') return <Loader />;
  if (status === 'failed') return <ErrorBanner message={error} />;

  if (sorted.length === 0) return <div className="p-4">No Pokémon match your search.</div>;

  return (
    <div>
        <h2 style={{color:'red',marginLeft:'400px'}}>PokeDex Pro – Advanced Pokémon Explorer</h2>
      <Filters />
      <div style={{display:'grid',marginLeft:'550px'}}>
        {sorted.map(p => (
          <Link
            to={`/details/${p.id}`}
            key={p.id}
            className={`border rounded p-2 shadow hover:scale-105 transition ${
              p.types.some(t => t.type.name === 'fire') ? 'border-red-400' :
              p.types.some(t => t.type.name === 'water') ? 'border-blue-400' : ''
            } ${p.base_experience > 100 ? 'bg-green-100' : ''}`}
          >
            <img src={p.sprites.front_default} alt={p.name} />
            <div className="text-lg font-bold">
              {p.name} {p.base_experience > 100 ? '🔥' : ''}
            </div>
            <div>Base XP: {p.base_experience}</div>
            <div>Weight: {p.weight}</div>
            <div>Types: {p.types.map(t => t.type.name).join(', ')}</div>
          </Link>
        ))}
      </div>
      <Pagination />
    </div>
  );
}
