import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    searchQuery: "", // Add a field to store the search query
    // other fields related to mail state
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    // other reducers for mail state
  },
});

export const { setSearchQuery } = mailSlice.actions;
// other action creators and reducers for mail state

export default mailSlice.reducer;
