import { configureStore } from '@reduxjs/toolkit';

import pokemonSlice from './reducers/pokemonSlice';
import listSlice from './reducers/listSlice';

const store = configureStore(
	{
		reducer: {
			pokemon: pokemonSlice,
			list: listSlice,
		},
	},
);

export default store;