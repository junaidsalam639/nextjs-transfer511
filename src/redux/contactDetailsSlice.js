import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const contactDetailsSlice = createSlice({
    name: 'contactDetails',
    initialState,
    reducers: {
        setContactDetails: (state, action) => {
            return action.payload;
        },
    },
});

export const { setContactDetails } = contactDetailsSlice.actions;
export default contactDetailsSlice.reducer;

