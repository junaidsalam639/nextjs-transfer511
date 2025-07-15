import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { transferAPI } from './createAPI';
import bookingReducer from './bookingSlice';
import selectCarReducer from './selectCarSlice';
import successBookingReducer from './successBookingSlice';
import contactDetailsReducer from './contactDetailsSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['booking', 'selectCar', 'successBooking', 'contactDetails']
};

const rootReducer = combineReducers({
    [transferAPI.reducerPath]: transferAPI.reducer,
    booking: bookingReducer,
    selectCar: selectCarReducer,
    successBooking: successBookingReducer,
    contactDetails: contactDetailsReducer,
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
