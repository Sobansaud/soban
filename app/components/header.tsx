import Link from "next/link";
import React from "react";


const Navbar=()=>{
  return (
  <div className="bg-red-500">
<ul className="flex gap-11 justify-center">
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/auth/login">
        <li>Login</li>
      </Link>
      <Link href="/auth/signup">
        <li>SignUp</li>
      </Link>
     
    </ul>
    </div>
  );
}

export default Navbar;