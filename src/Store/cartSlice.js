import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            let existIndex = state.findIndex(cartProduct=>cartProduct.id === action.payload.id)
            if(existIndex !== -1) {
                    toast('product already exist')
            } else {

                state.push(action.payload)
                toast("product added to cart")
            }
        },
        remove: (state,action)=>{
            return state.filter((product)=> product.id !== action.payload)
        }
    }
})

export default cartSlice.reducer
export const { add , remove} = cartSlice.actions