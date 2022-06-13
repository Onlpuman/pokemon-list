import { createSlice } from '@reduxjs/toolkit'
import { loadingStatus } from '../constants';

export const pokeReducer = createSlice({
	name: 'pokeReducer',
	initialState: {
		loading: loadingStatus.none,
		current: null,
	},
	reducers: {
		loading: (state) => {
			state.loading = loadingStatus.loading;
		},
		loadDone: (state, action) => {
			const {payload} = action;
			state.loading = loadingStatus.success;
			state.current = payload;
		},
		loadError: (state) => {
			state.loading = loadingStatus.error;
		},
		remove: (state) => {
			state.current = null;
			state.loading = loadingStatus.none;
		},
	},
});

export const { loading, loadDone, loadError, remove } = pokeReducer.actions;

export const loadPokemon = (name) => {
	return (dispatch) => {
		dispatch(loading());

		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then(response => {
				return response.json()
			})
			.then(data => {
				dispatch(loadDone(data));
			})
			.catch(error => {
				console.error(error);

				dispatch(loadError());
			});
	};
};

export const selectPokemon = (state) => {
	return {
		pokemon: state.pokeReducer.current,
		loading: state.pokeReducer.loading,
	};
};

export default pokeReducer.reducer;