import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "cart",
  initialState: {
    error: false,
    data: [],
  },
  reducers: {
    startFetchingCart: (state) => {
      state.error = true;
    },
    successFetchingCart: (state, action) => {
      (state.error = false), (state.data = action.payload.data);
    },
    failureFerchingCart: (state, action) => {
      (state.error = true), (state.data = []);
    },
    successUpdateQuantity:(state, action) =>{
        const {itemId, newQuantity} = action.payload
        const cartItem = state.data.find((item) => item.id === itemId);

      if (cartItem) {
        cartItem.quantity = newQuantity;
      }
    },
    failureUpdateQuantity: (state, action) => {
        state.error = true;
      },
  },
});

export const { startFetchingCart, successFetchingCart, failureFerchingCart, successUpdateQuantity, failureUpdateQuantity } =
  cartReducer.actions;

export default cartReducer.reducer;
