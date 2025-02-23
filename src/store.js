import {configureStore} from "@reduxjs/toolkit";
import productBasicDetailsReducer from './utlities/slice/productBasicDetailsSlice.js'

export default configureStore({
    reducer: {
        productDetails: productBasicDetailsReducer
    }
})