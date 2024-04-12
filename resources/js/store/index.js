import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";

const store = configureStore({
    reducer: {
        counterSlice: counterSlice.reducer,
    },
});

// store.subscribe("store change: ", store.getState());

export default store;
