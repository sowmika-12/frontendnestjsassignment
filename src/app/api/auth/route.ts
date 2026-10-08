import {NextResponse} from "next/server";

export async function POST(request:Request
) {
const {email,password} = await request.json();

if(
    email!=="admin@test.com"||password!=="admin@123"
){
  return NextResponse.json({MESSAGE:"Invalid credentials"}, {status:401});
}


const response = NextResponse.json({MESSAGE:"Login successful"}, {status:200});


response .cookies.set("auth_token","authenticated",{
    httpOnly:true,
    sameSite:"lax",
    secure:process.env.NODE_ENV==="production",path:"/",
})

return response;

}

