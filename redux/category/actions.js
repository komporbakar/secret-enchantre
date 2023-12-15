import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {
    startFetchingCategory: (state) => {
      state.loading = true;
    },
    fetchCategorySuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    //   state.error = null;
    },
    fetchCategoryFailure: (state, action) => {
      state.loading = false;
      state.data = [];
    //   state.error = action.payload;
    },
  },
});

export const { startFetchingCategory, fetchCategorySuccess, fetchCategoryFailure } = categorySlice.actions;

export default categorySlice.reducer;