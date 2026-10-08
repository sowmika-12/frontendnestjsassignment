"use client";

import Link from "next/link";

import {useRouter} from "next/navigation";

import {useAppSelector,selectTotalQuantity} from "@/store/hooks";

export default function Header(){

    const router=useRouter();
    const count=useAppSelector(selectTotalQuantity);


    async function logout(){
        await fetch("/api/auth/logout",{method:"POST"})



        router.push("/login");
        router.refresh();
    }

return(
    <header>

            <Link href="/products">Shopcart</Link>
        <nav>
            <Link href="/products">Products</Link>
            <Link href="/cart">Cart ({count})</Link>
            <button onClick={logout}>Logout</button>
        </nav>
    </header>
)



}
