import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import TokenSlice from './TokenSlice';
import favouritesslice from './favouritesslice'


const store = configureStore({
  reducer: {
    cart: cartReducer,
    Token:TokenSlice,
    favourite:favouritesslice
  },
});

export default store;
