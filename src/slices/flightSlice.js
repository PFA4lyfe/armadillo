import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    departureCity: '',
    destinationCity: '', 
    depatureDate: '',
    returnDate: '',
    numTravelers: 0,
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
        setReturnDate(state, action) {
            state.returnDate = action.payload;
        }
        // setNumTravelers(state, action) {
        //     state.numTravelers = action.payload;
        // }
    }
});

export const { setDepartureCity, setDestinationCity, setDepartureDate, setReturnDate, setNumTravelers } = flightSlice.actions;

export default flightSlice.reducer;