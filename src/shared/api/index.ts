import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

const apiVaiants = {
	dummy: import.meta.env.VITE_DUMMY_URL,
	fstore: import.meta.env.VITE_URL_API,
};

const baseQuery = fetchBaseQuery({
	baseUrl: apiVaiants.dummy,
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
	const result = await baseQuery(args, api, extraOptions);
	return result;
};

export const api = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryExtended,
	refetchOnReconnect: true,
	refetchOnFocus: false,
	tagTypes: ['products', 'user'],
	endpoints: () => ({}),
});
