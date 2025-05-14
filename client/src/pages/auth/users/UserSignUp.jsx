import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { registerUser } from '../../../services/auth.service'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UserSignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const payload = {
      fullname:{
        firstname:firstName,
        lastname:lastName,
      },
      email: email,
      password: password
    }

    const response =await registerUser(payload);
    console.log("response",response);
    if(response.status === 200){
      
      toast.success(response.message);
      navigate('/user-login');
    }
    else{
      toast.error(response.message);
    }

  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg'>
        <div className='flex flex-col items-center'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' className='w-20 mb-6' alt='uber-logo'/>
          <h2 className='mt-2 text-center text-3xl font-extrabold text-gray-900'>Create your account</h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Join Uber and start your journey
          </p>
        </div>

        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='space-y-4'>
            <div>
              <label htmlFor='firstName' className='block text-sm font-medium text-gray-700'>What's your name?</label>
              <div className='mt-1 flex gap-4'>
                <input 
                  id='firstName'
                  type='text' 
                  className='appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                  placeholder='First Name' 
                  value={firstName} 
                  onChange={(e)=>setFirstName(e.target.value)}
                />
                <input 
                  id='lastName'
                  type='text' 
                  className='appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                  placeholder='Last Name' 
                  value={lastName} 
                  onChange={(e)=>setLastName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>What's your Email?</label>
              <div className='mt-1'>
                <input 
                  id='email'
                  type='email' 
                  placeholder="email@example.com" 
                  value={email} 
                  className='appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                  required 
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Enter Password</label>
              <div className='mt-1'>
                <input 
                  id='password'
                  type='password' 
                  placeholder="Password" 
                  className='appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' 
                  value={password} 
                  required 
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <button 
              type='submit'
              className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200'
            >
              Sign up
            </button>
          </div>
        </form>

        <div className='text-center mt-4'>
          <p className='text-sm text-gray-600'>
            Already have an account? {' '}
            <Link to='/user-login' className='font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200'>
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserSignUp