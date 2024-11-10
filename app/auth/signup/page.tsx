


export default function Signup(){
    return(
        <div className="bg-yellow-400" >
          <div className="text-center">
          <br/>
          <br/>
            <input className="bg-yellow-400 text-orange-800" type = "text"  placeholder = "Username"></input>
             <br/>
             <input className="bg-yellow-400" type="number" placeholder="Age"></input>
             <br/>
             <input className="bg-yellow-400" type="text" placeholder="Email"></input>
             <br/>

             
             <input className="bg-yellow-400" type="password" placeholder="Password"></input>
             <br/>
             <button className="bg-inherit text-orange-700">SignUp</button>
             </div>
        </div>
    )
}