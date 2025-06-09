import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSort } from '../features/pokemon/pokemonSlice';

export default function Filters() {
  const dispatch = useDispatch();
  const { filters, sort } = useSelector(state => state.pokemon);

  return (
    <div style={{marginLeft:"550px",fontSize:'20px'
    }}>
      <select value={filters} onChange={e => dispatch(setFilter(e.target.value))}>
        <option value="">All Types</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
      </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <select value={sort} onChange={e => dispatch(setSort(e.target.value))}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
}
