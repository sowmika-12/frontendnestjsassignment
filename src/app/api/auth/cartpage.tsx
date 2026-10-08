"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import {increase,decrease,remove,clear} from "@/store/cartSlice";

export default function CartPage() {

const dispatch=useuseAppDispatch();
const items= useAppSelector(state=>state.cart.items)


const quantity=useAppSelector(selectTotalAmount);




return(

    <Header/>


    <main className="cart-page">


        <h1>
            cart
        </h1>


        {items.length===0?(
            <div>
                <p>
                    Your cart is empty.
                </p>
            </div>

<button onClick={()=>dispatch(decrease(item.product.id))}>
              -
            </button>

            <button onClick={()=>dispatch(increase(item.product.id))}>
              +
            </button>

            <button onClick={()=>dispatch(remove(item.product.id))}>
              remove
            </button>


<button onClick={()=>dispatch(clear())}>
              Clear Cart
            </button>



        )
)



}
