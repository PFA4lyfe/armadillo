import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    departureCity: '',
    destinationCity: '', 
    depatureDate: '',
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
        },
        setDepartureDate(state, action) {
            state.depatureDate = action.payload; 
        },
    }
});

export const { setDepartureCity, setDestinationCity, setDepartureDate } = flightSlice.actions;

export default flightSlice.reducer;