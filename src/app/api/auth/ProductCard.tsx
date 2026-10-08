"use client";
import {product} from "@/types"
import {useDispatch } from "@/store/hooks";
import {addToCart} from "@/store/cartSlice";


export default function ProductCard({product}: {product: product}) {
  const dispatch = useDispatch();

  return(
    <article className="card">
        <Link href={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
        </Link>
        <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
        </button>
    </article>
    
  )
}