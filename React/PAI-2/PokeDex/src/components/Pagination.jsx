import { useDispatch, useSelector } from 'react-redux';
import { setOffset, fetchPokemon } from '../features/pokemon/pokemonSlice';

export default function Pagination() {
  const dispatch = useDispatch();
  const offset = useSelector(state => state.pokemon.offset);

  const changePage = newOffset => {
    dispatch(setOffset(newOffset));
    dispatch(fetchPokemon(newOffset));
  };

  return (
    <div style={{marginLeft:'500px',padding:'25px'}}>
      <button onClick={() => changePage(Math.max(offset - 10, 0))}>Previous</button>&nbsp;&nbsp;&nbsp;
      <button onClick={() => changePage(offset + 20)}>Next</button>
    </div>
  );
}
