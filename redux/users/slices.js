import { createSlice } from "@reduxjs/toolkit";

const usersReducer = createSlice({
  name: "users",
  initialState: {
    error: false,
    data: [],
  },
  reducers: {
    startFetchingUsers: (state) => {
      state.error = true;
    },
    successFetchingUsers: (state, action) => {
      (state.error = false), (state.data = action.payload.data);
    },
    failureFetchingUsers: (state, action) => {
      (state.error = true), (state.data = []);
    },
  },
});

export const {
  startFetchingUsers,
  successFetchingUsers,
  failureFetchingUsers,
} = usersReducer.actions;

export default usersReducer.reducer;
