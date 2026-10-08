import{useDispatch,useSelector,TypedUseSelectorHook}from 'react-redux'
import type{Rootstate,AppDispatch, RootState}from './store'
import { AppDispatch } from './store'


export const useAppDispatch=()=>useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector.withTypes<RootState>();
export const selectTotalQuantity=(state:RootState)=>state.cart.items.reduce((sum,item)=>sum+item.quantity,0)
