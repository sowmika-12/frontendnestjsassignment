"use client "
import {FormEvent, useState} from "react";

import  {useRouter} from "next/navigation";

export default  function Login(){
    const router=useRouter()
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const[loding,setLoading]=useState(false);

    async function submit(e.FormEvent){
        e.preventDefault();
        setLoading(true);
        setError("");
try{
    const res=await fetch("/api/auth/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password}),
    });
    
}
)

if(!res.ok){
    setError("Invalid credentials");
    setLoading(false);
    return;
}

router.push("/products");
router.refresh();
    }
    catch{
        setError("Something went wrong");
        setLoading(false);
    }
    finally{
        setLoading(false);

    }
}

return(
<main className="login-page">
    <h1>Login</h1>
    <form onSubmit={submit}>
        className="login-box">
        
        <h1>
            Login
        </h1>

        <input type="password"
        placeholder="Password"
        value={password}
        onchange={(e)=>setPassword(e.target.value)}
        required
        />


        {error &&(
            <p className="error">{error}</p>
        )}


<button disabled={loading} type="submit">
    {loading?"Loading...":"Login"}
</button>


<small>
    Email:admin@test.com
    <br>
    Password:admin123
    </br>
</small>

</form>

      
        
     </main>   
        
        
        
      
    
)
}
