import { configureStore } from "@reduxjs/toolkit";
import flightReducer from './flightSlice.js'

export const store = configureStore({
    reducer: {
        flight: flightReducer,
    },
});



