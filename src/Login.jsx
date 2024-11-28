/* eslint-disable */
import React from 'react';


function Login() {
    return (
    <>
        <div className='w-[100vw] mx-auto flex justify-center items-center h-[100vh] bg-secondry text-white'>
            <div className='flex '>
                <div className='-ml-28 brightness-75 flex flex-col'>
                    <img src="public\oppenheimer.jpeg" alt="" className='h-[90vh] self-end'/>
                </div>
                <div className=' flex items-center flex-col bg-primary p-8 h-[90vh]'>
                    <div className='flex justify-center items-center flex-col mb-10 mt-5 mx-6'>
                        <h1 className=' font-bold text-3xl'>Welcome!</h1>
                        <p className=' text-sm text-gray-200'>How about you quickly enter to see all the features!</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center border-[1px] rounded-xl py-7 px-9'>
                        <h1 className=' font-bold self-start text-3xl'>Hi, There</h1>
                        <p className=' text-md text-gray-300 mb-10'>Enter your email and password to sign in</p>
                        <div  className=' flex flex-col items-center justify-center w-[100%]'>
                            <label htmlFor="email" className=' text-xs self-start mb-2 font-semibold'>Email</label>
                            <input type="email"  className='mb-4 w-[80%] self-start text-black rounded-md px-3 py-1 outline-none border-[1px] border-purple' placeholder='Enter Email'/>
                            <label htmlFor="password" className=' text-xs self-start mb-2 font-semibold'>Password</label>
                            <input type="password"  className=' w-[80%] self-start text-black rounded-md px-3 py-1 outline-none border-[1px] border-purple' placeholder='Enter Password'/>
                            <button className=' my-10 bg-purple text-xl font-extrabold py-3 px-28 rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md hover:-translate-y-1 duration-75 transition-all shadow-xl hover:bg-violet-800'>Sign in</button>
                            <p className=' text-xs mb-7'>Forgot Password <span className=' text-blue-500 underline cursor-pointer'>Change It</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Login;