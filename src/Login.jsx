/* eslint-disable */
import React from 'react';


function Login() {
    return (
    <>
        <div className='w-[100vw] mx-auto flex justify-center items-center h-[100vh] bg-background'>
            <div className='flex'>
                <div>
                    <img src="public\login.jpg" alt="" className='h-[40vw]'/>
                </div>
                <div className=''>
                    <h1>Welcome!</h1>
                    <p>How about you quickly enter to see all the features!</p>
                    <div>
                        <h1>Hi, There</h1>
                        <p>Enter your email and password to sign in</p>
                        <form action="">
                            <input type="email" />
                            <input type="password" />
                            <button>Sign in</button>
                            <p>Forgot Password <span>Change It</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Login;