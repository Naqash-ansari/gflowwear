const { configureStore } = require("@reduxjs/toolkit");
import RootSlice from "./RootSlice";

export const store = configureStore({
    reducer:RootSlice
})