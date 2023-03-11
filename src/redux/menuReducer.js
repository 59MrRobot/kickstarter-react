import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    showMenu: false,
  },
  reducers: {
    slideMenuIn: (state) => {
      state.showMenu = true;
    },
    slideMenuOut: (state) => {
      state.showMenu = false;
    },
  }
});

export const {
  slideMenuIn,
  slideMenuOut,
} = menuSlice.actions;

export default menuSlice.reducer;