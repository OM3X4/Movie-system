import { CiHome } from "react-icons/ci"; 
/* eslint-disable */
import { useState } from 'react'
import Login from './Login'
import Home from './home'

function App() {

  return (
    <>

    <div className='h-screen bg-dark_background flex'>
      {/* ---side panel--- */}
      <div className=' bg-secondry w-[15vw] h-screen fixed brightness-90 flex items-center flex-col py-12'>
        <h1 className="text-white text-3xl font-bold mb-16">Tasteful Picks</h1>
        <p>menu</p>
        <div className="flex items-center text-xl text-white font-semibold self-start ml-5">
          <div className="flex items-center justify-betwee">
            <CiHome className="mr-2"/>
            <h1>Home</h1>
            <div className=" w-1 rounded-full h-[100%] bg-purple"></div>
          </div>
        </div>
      </div>
      {/* ------nav bar ------- */}
      <div className=''>
        <div className=' h-[10vh] w-[85vw] ml-[15vw] bg-secondry border-l border-white flex items-center justify-around'>
        </div>
        <div className='flex-1 ml-[15vw] border-l border-white'>
          <Home />
        </div>
      </div>
    </div>
    </>  
  )
}

export default App
