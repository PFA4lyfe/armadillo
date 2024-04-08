import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  username: 'lord',
  id: 7,
  departureCity: 'LAX',
  destinationCity: 'JFK',
  departureDate: '2024-05-05',
  returnDate: '2024-05-07',
  numTravelers: 1,
  searchArr: [
    {
      dep_city: 'LAX',
      dep_date: '2024-05-15',
      dest_city: 'JFK',
      ret_date: '2024-05-16',
      price: 1410.52,
      airlines: 'JetBlue Airways',
      num_travelers: 2,
    },
    {
      dep_city: 'LAX',
      dep_date: '2024-05-15',
      dest_city: 'JFK',
      ret_date: '2024-05-16',
      price: 1410.52,
      airlines: 'JetBlue Airways',
      num_travelers: 2,
    },
    {
      dep_city: 'LAX',
      dep_date: '2024-05-15',
      dest_city: 'JFK',
      ret_date: '2024-05-16',
      price: 1410.52,
      airlines: 'JetBlue Airways',
      num_travelers: 2,
    },
  ],
  favorites: [],
};

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
      state.favorites.push(action.payload);
    },
    setFavorite: (state, action) => {
      state.favorites = action.payload;
    },
    removeFavorite: (state, action) => {
      state.favorites.filter((favorites) => favorites.id !== action.payload);
    },
  },
});

export const {
  setDepartureCity,
  setDestinationCity,
  setDepartureDate,
  setReturnDate,
  setNumTravelers,
  setSearchArr,
  addFavorite,
  setFavorite,
  removeFavorite,
} = flightSlice.actions;

export default flightSlice.reducer;
