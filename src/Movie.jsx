/* eslint-disable */
import React from 'react';
import { BiBookmark } from "react-icons/bi"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { AiFillPlayCircle } from "react-icons/ai"; 
import { data } from '../public/Data/Movies';

function Movie() {
    return (
    <>
        <div>
            {/* ---------Banner------------ */}
            <div>
                <div className='bg-[url("https://cdn.wallpaper.tn/large/Breaking-Bad-Meth-Wallpaper-57563.jpg")] h-96 bg-cover bg-center flex items-end justify-between'>
                        <div className=' ml-20 mb-5 text-white text-6xl font-bold'>
                            <h1 className='mb-2'>Breaking-Bad</h1>
                            <h1 className=' font-medium text-2xl'>Action | 2024 | 2 hr 8min</h1>
                        </div>
                        <div className="ml-10 self-end flex justify-center items-center mr-20 mb-5">
                            <button className="flex items-center justify-center bg-white text-black w-32 text-sm mx-2 px-2 py-3 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-black hover:text-white transition-all duration-300"><AiFillPlayCircle className="mx-1"/>Watch Trailer</button>
                            <button className="flex items-center justify-center bg-purple text-white w-32 text-sm mx-2 py-3 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-black hover:text-white transition-all duration-300"><AiOutlineInfoCircle className="mx-2"/>Info</button>
                            <button className="flex items-center justify-center bg-primary text-white w-32 text-sm mx-2 px-2 py-3 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-purple hover:text-white transition-all duration-300"><BiBookmark />Watch List</button>
                        </div>
                </div>

            </div>
            {/* -------------paragraph------------ */}
            <div className='text-gray-200 text-2xl mr-52 ml-10 mt-10 mb-10'>
                Breaking Bad is a crime drama about Walter White,
                a high school chemistry teacher turned methamphetamine producer, and his descent into crime.
            </div>
            {/* --------------Stats------------ */}
            <div>
                <h1>Stats</h1>
            </div>
        </div>
    </>
    );
}

export default Movie;