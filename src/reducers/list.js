import { createSlice } from '@reduxjs/toolkit'
import { loadingStatus, defaultLimit } from '../constants';

export const list = createSlice({
	name: 'list',
	initialState: {
		loading: loadingStatus.none,
		list: null,
		count: 0,
		offset: 0,
	},
	reducers: {
		loading: (state) => {
			state.loading = loadingStatus.loading;
		},
		loadDone: (state, action) => {
			const {
				payload: {
					data,
					offset,
				},
			} = action;
			state.loading = loadingStatus.success;
			state.list = data.results;
			state.count = data.count;
			state.offset = offset;
		},
		loadError: (state) => {
			state.loading = loadingStatus.error;
		},
		remove: (state) => {
			state.current = null;
			state.list = null;
			state.count = 0;
			state.offset = 0;
		},
	},
});

export const { loading, loadDone, loadError, remove } = list.actions;

export const loadList = (page) => {
	return (dispatch) => {
		dispatch(loading());

		const offset = (page - 1) * defaultLimit;

		fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${defaultLimit}`)
			.then(response => {
				return response.json();
			})
			.then(data => {
				dispatch(loadDone({data, offset}));
			})
			.catch(error => {
				console.error(error);

				dispatch(loadError());
			});
	};
};

export const selectList = (state) => {
	return {
		list: state.list.list,
		count: state.list.count,
		loading: state.list.loading,
		offset: state.list.offset,
	};
};

export default list.reducer;