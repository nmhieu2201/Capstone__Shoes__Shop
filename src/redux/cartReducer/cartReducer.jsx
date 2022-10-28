import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listShoes: [],
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addShoesAction: (state, action) => {
        
    },
  },
});

export const { addShoesAction } = cartReducer.actions;

export default cartReducer.reducer;

//async action
