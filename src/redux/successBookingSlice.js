import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const successBookingSlice = createSlice({
    name: 'successBooking',
    initialState,
    reducers: {
        setSuccessBookingData: (state, action) => {
            return action.payload;
        },
    },
});

export const { setSuccessBookingData } = successBookingSlice.actions;
export default successBookingSlice.reducer;
