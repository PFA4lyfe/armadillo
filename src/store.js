import { configureStore } from "@reduxjs/toolkit";
import flightReducer from './slices/flightSlice.js'

export const store = configureStore({
    reducer: {
        flight: flightReducer,
    },
});



