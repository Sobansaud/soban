import Navbar from "@/app/components/header";
import React from "react";

export default function Login(){
    return(
        <div className=" bg-yellow-400 text-center ">
            <br/>
            <br/>
             <input className="bg-yellow-400" type="text" placeholder="Email"></input>
             <br/>

             
             <input className="bg-yellow-400" type="password" placeholder="Password"></input>
             <br/>
             <button className="bg-inherit text-orange-700">Login</button>
        
        </div>
    )
} 