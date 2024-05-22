import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import olxLogo from '../assets/olx-logo.svg';
import Navbar from '../Components/Navbar';
import {userAuth} from '../Context/firebasecontext'
import {loginUpValidate} from '../Utilities/login'
 
function Log() {
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [error,setError] = useState('')
   const navigate = useNavigate()
   const {login} = userAuth()
  const handlesubmit =async (e)=>{
    e.preventDefault()
    const validationError  = loginUpValidate(email,password)
    if (validationError ) {
      setError(validationError )
      return 
    }
    try {
      await login(email,password)
      navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
  <>    
   <Navbar/>
    <div className='loginform bg-grey-100'>
    <div className='w-full relative'>
      <div className='bg-grey-100 fixed top-0 left-0 w-full h-screen' />
      <div className='fixed w-full px-4 py-24 z-20'>
        <div className='max-w-[450px] h-[500px] mx-auto bg-grey-100 rounded-lg shadow-lg'> 
          <div className='max-w-[320px] mx-auto py-16'>
         
               <h1 className='text-3xl font-bold text-black text-center'>Olx</h1>
                  <p className='font-bold pr-5
                   my-5 text-center'>Enter Email and Password..</p>
            <form onSubmit={handlesubmit} className='w-full flex flex-col py-4'>
              <input
                type='email'
                value={email}
                placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}
                autoComplete='email'
                className='p-3 my-2 bg-white rounded border border-black'
              />
              <input
                type='password'
                value={password}
                placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete='current-password'
                className='p-3 my-2  rounded border border-black'
              />
                 <p className='pt-6 text-center text-red-600'>{error}</p>
              <button type='submit' className='bg-black py-3 my-6 rounded font-nsans-bold text-white '>Login</button>
             
              <p className='py-8 text-center'>
                {' '}
                <Link to="/signup" className='text-blue underline '>Create an account </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Log
