import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setBookingData: (state, action) => {
            return action.payload;
        },
    },
});

export const { setBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;
