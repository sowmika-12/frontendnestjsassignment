import{
    NextRequest, NextResponse } from "next/server";

    import {products} from "@/data/products";

    export async function GET(request:NextRequest){


        const search=request.nextUrl.searchPrams.get("search")?.toLowerCase()||"";

        const category=request.nextUrl.searchParams.get("category")?.toLowerCase()||"";

        const filteredProducts=products.filter(item=>{
            const matchesSearch=item.name.toLowerCase().includes(search);
            const matchesCategory=category?item.category.toLowerCase()===category:true;
            return matchesSearch && matchesCategory;
        });
        return NextResponse.json({filteredProducts,
            total:filteredProducts.length

        }
        );
    }
     