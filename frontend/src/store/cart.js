import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    items:[]
}
const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const {productId , quantity} = action.payload;
            const indexProduct = (state.items).findIndex(item => item.productId === productId);
            if(indexProduct >= 0){
                state.items[indexProduct].quantity += quantity;
            }else{
                state.items.push({productId , quantity})
            }
        }
    }
});
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;