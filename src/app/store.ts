import { api } from '@/shared/api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(api.middleware);
	},
});
