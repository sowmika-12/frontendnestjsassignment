"use client"
import Image from "next/image";
import Link from "next/link";

import {useparams,useRouter} from "next/navigation";
import {useEffect,useState} from "react";
import Header from "@/components/Header";
import {useAppDispatch,useAppSelector} from "@/store/hooks";
import {addToCart} from "@/store/cartSlice";

import {Product} from "@/types";
export default function DynamicProductDetails() {
    const params=useparams<{id:string}>();
    const router=useRouter();
    const [product,setProduct]=useState<Product|null>(null);
    const dispatch=useAppDispatch();
    const [error,setError]=useState<string|null>(null);
    useEffect(()=>{
        const loadProduct=async()=>{
            try{
                const response=await fetch(`/api/products/${params.id}`);
                if(!response.ok){
                    throw new Error("Failed to fetch product");
                }
                const productData=await response.json();
                setProduct(productData);
            } catch (error) {
                setError("Error fetching product details");
            }
        };

        loadProduct();
    }, [params.id]);
    if(loading){
        return(
            <>
            
            <Header/>

            <main className="container mx-auto py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <Image
                            src={product?.image || "/placeholder.jpg"}
                            alt={product?.name || "Product Image"}
                            width={400}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-3xl font-bold mb-4">{product?.name || "Product Name"}</h1>
                        <p className="text-xl font-semibold mb-4">${product?.price?.toFixed(2) || "0.00"}</p>
                        <p className="text-gray-600 mb-6">{product?.description || "Product description will be here."}</p>
                        <button
                            onClick={() => dispatch(addToCart(product))}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </main>

            </>
        )
    }
