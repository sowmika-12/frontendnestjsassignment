import {NextResponse} from "next/server";
import {products} from "@/data/products";

export async function GET(request:Request,
    context:{
        params:Promise<{id:string}>
    }
){
    const {id}=await context.params;

    const product =products.find(item=>item.id===Number(id))
    if(!product){
        return NextResponse.json({message:"Product not found"},{
            status:404
        })
    }
    return NextResponse.json(product);
}

