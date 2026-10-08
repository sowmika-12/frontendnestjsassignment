import{createSlice,PayloadAction}from '@reduxjs/toolkit'
import {CartItem,Product} from "@/types"
interface CartState{
    items:CartItem[];
}
const initialState:CartState={
    items:[];

}


const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<Product>)=>{
            const item=state.items.find(x=>x.product.id===action.payload.id)
            if(item){
                item.quantity++;
            }else{
                state.items.push({product:action.payload,quantity:1})
            }
})

increase(state,action:PayloadAction<number>){
    const item=state.items.find(x=>x.product.id===action.payload)
    if(item){
        item.quantity++;
    }
}

decrease(state,action:PayloadAction<number>){
    const item=state.items.find(x=>x.product.id===action.payload)
    if(item && item.quantity>1){
        item.quantity--;
    }
    else{
        state.items=state.items.filter(x=>x.product.id!==action.payload)
    }
}

remove({
state,action:PayloadAction<number>){
    state.items=state.items.filter(x=>x.product.id!==action.payload)
}

clear(state){
    state.items=[]
}
}})
export const {addToCart,increase,decrease,remove,clear}=cartSlice.actions
export default cartSlice.reducer