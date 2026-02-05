import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: '',
});

const baseQueryExtended: BaseQueryFn = (args, api, extraOptions) => {
	const result = baseQuery(args, api, extraOptions);
	return result;
};

export const api = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryExtended,
	refetchOnReconnect: true,
	refetchOnFocus: false,
	tagTypes: ['products'],
	endpoints: () => ({}),
});
