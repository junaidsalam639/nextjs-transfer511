import { configureStore } from '@reduxjs/toolkit';
import { transferAPI } from './createAPI';
import bookingReducer from './bookingSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['booking']
};

const rootReducer = combineReducers({
    [transferAPI.reducerPath]: transferAPI.reducer,
    booking: bookingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(transferAPI.middleware),
});

export const persistor = persistStore(store);
