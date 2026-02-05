import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    console.log(handleLogin);
    

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("form submitted");
        
        setEmail('');
        setPassword(''); 
        
        

    }

    return (

    <div className="screen flex h-screen    text-white   w-screen  items-center justify-center">

        <div className="form border-2 border-emerald-500 px-22 py-15 rounded-3xl ">

            <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col justify-center align-center ' >

                <input value={email}  onChange={(e)=>{
                    setEmail(e.target.value);
                }} required className='text-black outline-none  w-xs border-2 border-emerald-600 rounded-full py-3 px-4 mx-4 my-4 bg-transparent placeholder:text-gray-400'   type='email' placeholder='Enter Your Email'/>
                <input value={password}  onChange={(e)=>{
                    setPassword(e.target.value);
                }} required className='text-black outline-none   border-2 border-emerald-600 rounded-full py-3 px-4 mx-4 my-4 bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter Your Password'/>
                <button className='text-white outline-none   bg-emerald-500 font-bold border-2 border-emerald-600 rounded-full py-2  mx-4 my-4 ' >Login</button>

            </form>


        </div>

        




    </div>
  )
}

export default Login