import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/slice'
import userReducer from './users/slices'

const store = configureStore({
    reducer:{
        user: userReducer,
        cart: cartReducer
    }
})

export default store