import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import  {userAuth} from '../Context/firebasecontext.jsx'

function Signup() {
    const [username,setUsername] = useState('')
    const [mobile,setMobile] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const {signup}=userAuth()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            await signup(email,password,username,mobile)
            navigate("/login")
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <>
      <Navbar />
      
      <div className='signupform bg-gray-100 flex items-center justify-center '>
        <div className='w-full max-w-md relative z-10'>
          <div className='fixed inset-0 bg-gray-100 z-0' />
          <div className='relative z-20 bg-white px-6 py-8 rounded-lg shadow-lg'>
            <div className='max-w-xs mx-auto'>
              <h1 className='text-3xl font-bold text-black text-center'>Olx</h1>
              <p className='font-bold mt-5 mb-8 text-center'>Create Your Account</p>
              <form onSubmit={handleSubmit} className='w-full flex flex-col space-y-4'>
                <input
                  type='text'
                  value={username}
                  placeholder='Username'
                  onChange={(e)=>{setUsername(e.target.value)}}
                  className='p-3 bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                  type='number'
                  value={mobile}
                  placeholder='Phone Number'
                  onChange={(e)=>{setMobile(e.target.value)}}
                  className='p-3 bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                  type='email'
                  value={email}
                  placeholder='Email'
                  onChange={(e)=>{setEmail(e.target.value)}}
                  autoComplete='email'
                  className='p-3 bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                  type='password'
                  value={password}
                  placeholder='Password'
                  onChange={(e)=>{setPassword(e.target.value)}}
                  autoComplete='current-password'
                  className='p-3 bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button type='submit' className='bg-black py-3 rounded font-bold text-white hover:bg-gray-800 transition duration-300'>
                  Create
                </button>
                <p className='pt-6 text-center'>
                  Already have an account?{' '}
                  <Link to="/login" className='text-blue-500 hover:underline'>
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
