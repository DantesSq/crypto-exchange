import { CryptoApi } from './../services/CryptoService';
import portfolioSlice from './portfolio/portfolioSlice';
import usersSlice from './users/usersSlice';
import favouriteSlice from './favourite/favouriteSlice';
import paginationSlice from './pagination/paginationSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    PERSIST,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import localforage from 'localforage';

const persistConfig = {
    key: 'root',
    storage: localforage,
};

const rootReducer = combineReducers({
    favouriteSlice,
    usersSlice,
    portfolioSlice,
    paginationSlice,
    [CryptoApi.reducerPath]: CryptoApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(CryptoApi.middleware),
    });
};

export const store = setupStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
