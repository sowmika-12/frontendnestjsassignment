import {NextResponse} from "next/server";
export async function POST(){
    const response=NextResponse.json({message:"Logged out successfully"});

response.cookies.set({
    name:"auth_token",
    value:"",
    httpOnly:true,
    expires:new Date(0),
    secure:true,
    sameSite:"lax",
    path:'/'
})



    return response;
}