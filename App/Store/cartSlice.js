import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
      return state;
    },
    remove(state, action) {
      state.splice(
        state.indexOf(state.find(item => item._id === action.payload._id)),
        1,
      );
      return state;
    },
    removeAllInstance(state, action) {
      return state.filter(item => item._id !== action.payload._id);
    },
  },
});

export const {add, remove, removeAll,removeAllInstance} = cartSlice.actions;
export default cartSlice.reducer;
