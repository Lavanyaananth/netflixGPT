import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
export default appStore;

// Redux store
// install redux toolkit and react redux dependencies
// create appStore.js
// 1. config store
// 2. Add reducers (from slices)
// create slices
// name
// initial state
// reducers
// export for usage
