import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  // console.log(handleLogin);
    const[email, setEmail] = useState("");
    const[password , setPassword] = useState("");



  const submitHandler = (event)=>{
    event.preventDefault();
    handleLogin(email , password);
    setEmail("")
    setPassword("")

  }




  return (
    <div className = "flex h-screen w-screen  items-center justify-center  ">
      <div className='border-2  border-emerald-600 p-20 rounded-xl'>
        <form className='flex flex-col items-center justify-center'  onSubmit={(e)=>{
            submitHandler(e);
        }}> 
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-grey-400' type='email' placeholder='enter your email'></input>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-grey-400 mt-4'  type='password' placeholder='enter your password'></input>
            <button className='border-2 bg-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none border-none placeholde:text-white mt-5' >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
