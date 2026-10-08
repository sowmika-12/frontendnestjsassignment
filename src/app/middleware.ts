import{
    NextRequest ,NextResponse
} from "next/server";


export function middleware(req:NextRequest){
    const token=req.cookies.get("auth_token")?.value;
    const loggedIn=token ==="authenticated"
    const path=request.nextUrl.pathname;
if(
    (path.startsWith("/products")||path.startsWith("/cart"))&&!loggedIn
){
    return NextResponse.redirect(new URL ("/login",req.url));

}

if(
    path ==="/login"&&loggedIn
){
    return NextResponse.redirect(new URL ("/products",req.url));
}

return NextResponse.next();
}

export const config={
    matcher:["/login","/products/:path*","/cart/:path*"]
}
    