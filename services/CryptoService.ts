import { data } from '@/models/data';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CryptoApi = createApi({
    reducerPath: 'CryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coincap.io/v2/assets' }),
    endpoints: (build) => ({
        fetchCrypto: build.query<data, number>({
            query: (limit: number) => ({
                url: '',
                params: {
                    limit: limit,
                },
            }),
        }),
        fetchCryptoByIds: build.query<data, string>({
            query: (ids: string) => ({
                url: '',
                params: {
                    ids: ids,
                },
            }),
        }),
        fetchCryptoBySearch: build.query<data, { search: string; limit: number }>({
            query: (args) => {
                return {
                    url: '',
                    params: {
                        search: args.search,
                        limit: args.limit,
                    },
                };
            },
        }),
    }),
});

export const { useFetchCryptoQuery, useFetchCryptoByIdsQuery, useFetchCryptoBySearchQuery } =
    CryptoApi;
