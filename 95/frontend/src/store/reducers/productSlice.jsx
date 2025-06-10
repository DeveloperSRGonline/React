import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products : []
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{// yahe hum api call nahi kar sakte isliye hum yaha data ko la and de rahe hai 
        loadproduct : (state,action) => {
            // here we cannot call api
            state.products = action.payload;// isliye data hum sidhe sidhe yaha daal rahe hai and jab sidhe hi data daal rahe hai that means api kahi aur call karni padegi
        }
    }
})

export default productSlice.reducer;
export const {loadcart} = productSlice.actions;