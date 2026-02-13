import { api as index } from '@shared/api/index';

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		RegisterUser: builder.mutation<
			Users.RegisterUserRes,
			Users.RegisterUserReq
		>({
			query: (data) => (
				{
					url: '/users',
					method: 'POST',
					body: data,
				}
			),
			invalidatesTags: ['user'],
		}),
	}),
});

export const { useRegisterUserMutation } = api;
