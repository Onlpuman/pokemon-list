import { configureStore, createSlice } from '@reduxjs/toolkit';
import pokeReducer from './reducers/pokeReducer';
import list from './reducers/list';

const store = configureStore(
	{
		reducer: {
			pokeReducer,
			list,
		},
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;