import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import mailSlice from "./mailSlice";
const reducers = combineReducers({
  mailBox: mailSlice,
});

const store = configureStore({
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       immutableCheck: false,
  //       serializableCheck: false,
  //     }),
  reducer: reducers,
});
export default store;
