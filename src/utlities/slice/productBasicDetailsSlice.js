import {createSlice} from "@reduxjs/toolkit";

export const productBasicDetailsSlice = createSlice({
    name: 'productBasicDetails',
    initialState: {
        productBasicDetails: {},
    },
    reducers: {
        storeProductBasicDetails: (state, action) => {}
    }
})

export default productBasicDetailsSlice.reducer