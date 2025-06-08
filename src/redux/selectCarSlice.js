import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const selectCarSlice = createSlice({
    name: 'selectCar',
    initialState,
    reducers: {
        setSelectCarData: (state, action) => {
            return action.payload;
        },
    },
});

export const { setSelectCarData } = selectCarSlice.actions;
export default selectCarSlice.reducer;


