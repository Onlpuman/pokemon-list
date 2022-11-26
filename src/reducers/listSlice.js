import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {loadingStatus, defaultLimit} from '../constants';

export const getPage = createAsyncThunk(
	'pageData/getPage',
	async (_, {rejectWithValue, getState}) => {
		try {
			const state = getState();
			const currentPage = state.list.currentPage;
			const offset = (currentPage - 1) * defaultLimit;
			
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${defaultLimit}`);
			
			if (!response.ok) {
				throw new Error('Server error');
			}
			
			const data = await response.json();
			return {data, offset};
			
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

export const listSlice = createSlice({
	name: 'list',
	initialState: {
		loading: loadingStatus.none,
		list: null,
		count: 0,
		offset: 0,
		currentPage: 0,
	},
	reducers: {
		setPage: (state, action) => {
			state.currentPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getPage.pending, (state) => {
			state.loading = loadingStatus.loading;
		});
		builder.addCase(getPage.fulfilled, (state, action) => {
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
		});
		
		builder.addCase(getPage.rejected, (state, action) => {
			console.warn(action.payload);
			state.loading = loadingStatus.error;
		});
	},
});

export const {setPage} = listSlice.actions;
export default listSlice.reducer;