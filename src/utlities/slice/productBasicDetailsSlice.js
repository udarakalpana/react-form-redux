import { createSlice } from "@reduxjs/toolkit";

export const productBasicDetailsSlice = createSlice({
  name: "productBasicDetails",
  initialState: {
    productBasicDetails: {},
  },
  reducers: {
    storeProductBasicDetails: (state, action) => {
      state.productBasicDetails = action.payload;
    },
  },
});

export const { storeProductBasicDetails } = productBasicDetailsSlice.actions;

export default productBasicDetailsSlice.reducer;
