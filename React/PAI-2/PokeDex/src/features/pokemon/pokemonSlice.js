import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (offset, thunkAPI) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=5`);
    const detailed = await Promise.all(
      res.data.results.map(p => axios.get(p.url).then(r => r.data))
    );
    return detailed;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
    offset: 0,
    filters: '',
    sort: 'asc',
  },
  reducers: {
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPokemon.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setOffset, setFilter, setSort } = pokemonSlice.actions;
export default pokemonSlice.reducer;
