import {createSlice} from '@reduxjs/toolkit';

const favouritesslice = createSlice({
  name: 'favourite',
  initialState: [],
  reducers: {
    addFavourite(state, action) {
      state.push(action.payload);
      return state;
    },
    removeAllInstance(state, action) {
      return state.filter(item => item._id !== action.payload._id);
    },
  },
});

export const {addFavourite, removeAllInstance} = favouritesslice.actions;
export default favouritesslice.reducer;