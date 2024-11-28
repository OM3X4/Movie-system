/* eslint-disable */
import { useState } from 'react'
import Login from './Login'
import Home from './home'

function App() {

  return (
    <>
    <div className='h-screen bg-secondry flex'>
      {/* ---side panel--- */}
      <div className=' bg-green-600 w-[15vw] h-screen fixed '>

      </div>
      <div className='flex-1 ml-[15vw]'>
        <Home />
      </div>
    </div>
    </>  
  )
}

export default App
