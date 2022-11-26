import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {loadingStatus} from '../constants';

export const loadPokemon = createAsyncThunk(
	'pokemonData/loadPokemon',
	async (name, {rejectWithValue}) => {
		try {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
			
			if (!response.ok) {
				throw new Error('Server error');
			}
			
			return await response.json();
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

export const pokemonSlice = createSlice({
	name: 'pokeReducer',
	initialState: {
		loading: loadingStatus.none,
		current: null,
	},
	reducers: {
		remove: (state) => {
			state.current = null;
			state.loading = loadingStatus.none;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loadPokemon.pending, (state) => {
			state.loading = loadingStatus.loading;
		});
		builder.addCase(loadPokemon.fulfilled, (state, action) => {
			state.loading = loadingStatus.success;
			state.current = action.payload;
		});
		
		builder.addCase(loadPokemon.rejected, (state, action) => {
			console.warn(action.payload);
			state.loading = loadingStatus.error;
		});
	},
});

export const {remove} = pokemonSlice.actions;
export default pokemonSlice.reducer;