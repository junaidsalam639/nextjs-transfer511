import { configureStore } from '@reduxjs/toolkit'
import { transferAPI } from './createAPI'

export const store = configureStore({
    reducer: {
        [transferAPI.reducerPath]: transferAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(transferAPI.middleware),
});

