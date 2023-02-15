import { cryptoItem } from '@/models/cryptoItem';
import { data } from '@/models/data';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
    BaseQueryFn,
    createApi,
    EndpointDefinitions,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

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
    }),
});

export const { useFetchCryptoQuery } = CryptoApi;
