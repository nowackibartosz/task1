import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/products' }),
	endpoints: builder => ({
		getProduct: builder.query({
			query: params => (params.id ? `?id=${params.id}` : `?per_page=5&page=${params.currentPage}`)
		})
	})
});

export const { useGetProductQuery } = productApi;
