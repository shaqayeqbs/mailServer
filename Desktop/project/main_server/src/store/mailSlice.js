import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    mails: [], // Add a field to store the search query
    // other fields related to mail state
  },
  reducers: {
    setMails: (state, action) => {
      state.mails = action.payload;
    },
  },
});

export const { setMails } = mailSlice.actions;
// other action creators and reducers for mail state

export default mailSlice.reducer;
