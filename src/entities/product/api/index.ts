import { api as index } from '@shared/api/index';

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		GetAllProducts: builder.query<Products.ProductResponse, void>({
			query: () => ({
				url: '/products',
				method: 'GET',
			}),
			providesTags: ['products'],
		}),
	}),
});

export const { useGetAllProductsQuery } = api;
