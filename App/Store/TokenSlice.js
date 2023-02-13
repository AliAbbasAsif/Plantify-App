import {createSlice} from '@reduxjs/toolkit';
const TokenSlice = createSlice({
  name: 'Token',
  initialState: {},
  reducers: {
    add(state, action) {
      return {...state, ...action.payload};
    },
    removeAuthInfo(state) {
      return (state = {});
    },
  },
});

export const {add} = TokenSlice.actions;
export default TokenSlice.reducer;
