import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    departureCity: '',
    destinationCity: ''
}

export const flightSlice = createSlice({
    name: 'flight',
    initialState,
    reducers: {
        setDepartureCity(state, action) {
            state.departureCity = action.payload;
        },
        setDestinationCity(state, action) {
            state.destinationCity = action.payload;
        }
    }
});

export const { setDepartureCity, setDestinationCity } = flightSlice.actions;

export default flightSlice.reducer;