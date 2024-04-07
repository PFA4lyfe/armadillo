 import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    username: 'lord',
    id: 7,
    departureCity: 'LAX',
    destinationCity: 'JFK', 
    departureDate: '2024-05-05',
    returnDate: '2024-05-07',
    numTravelers: 1,
    searchArr: [{
        dep_city: 'LAX',
        dest_city: 'JFK',
        dep_date: '2024-05-04',
        ret_date: '2024-05-08',
        price: 1200,
        airline: 'Jet Blue',
        num_travelers: 2,
    }],
    favorites: [{
        dep_city: 'LAX',
        dest_city: 'JFK',
        dep_date: '2024-05-04',
        ret_date: '2024-05-08',
        price: 1200,
        airline: 'Jet Blue',
        num_travelers: 2,
    },
    {
        dep_city: 'LAX',
        dest_city: 'JFK',
        dep_date: '2024-05-04',
        ret_date: '2024-05-08',
        price: 1200,
        airline: 'Jet Blue',
        num_travelers: 2,
    }],
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
            state.departureDate = action.payload; 
        },
        setReturnDate(state, action) {
            state.returnDate = action.payload;
        },
        setNumTravelers(state, action) {
            state.numTravelers = action.payload;
        },
        setSearchArr(state, action) {
            state.searchArr = action.payload;
        },
        addFavorite: (state, action) => {
            state.favorites.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.favorites.filter(favorites => favorites.id !== action.payload)
        }
    }
});

export const { setDepartureCity, setDestinationCity, setDepartureDate, setReturnDate, setNumTravelers, addFavorite, removeFavorite } = flightSlice.actions;

export default flightSlice.reducer;