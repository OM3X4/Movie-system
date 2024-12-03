/* eslint-disable */
import React from 'react';
import { BiBookmark } from "react-icons/bi"; 
import { SiRottentomatoes } from "react-icons/si"; 
import { FaImdb } from "react-icons/fa"; 
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
                            <h1 className=' font-medium text-2xl'>Action | 2024 | 2 hr 8 min</h1>
                        </div>
                        <div className="ml-10 self-end flex justify-center items-center mr-20 mb-5">
                            <button className="flex items-center justify-center bg-white text-black text-xl mx-2 px-10 py-4 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-black hover:text-white transition-all duration-300"><AiFillPlayCircle className="mx-1"/>Watch Trailer</button>
                            <button className="flex items-center justify-center bg-purple text-white text-xl mx-2 px-10 py-4 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-black hover:text-white transition-all duration-300"><AiOutlineInfoCircle className="mx-2"/>Info</button>
                            <button className="flex items-center justify-center bg-primary text-white text-xl mx-2 px-10 py-4 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-purple hover:text-white transition-all duration-300"><BiBookmark />Watch List</button>
                        </div>
                </div>

            </div>
            {/* -------------paragraph------------ */}
            <div className='text-gray-200 text-2xl mr-52 ml-10 mt-10 mb-10'>
                Breaking Bad is a crime drama about Walter White,
                a high school chemistry teacher turned methamphetamine producer, and his descent into crime.
            </div>
            <div className='flex'>
                {/* --------------Stats------------ */}
                <div>
                    <h1>Stats</h1>
                </div>
                {/* -------------------similar results----------- */}
                <div>
                    {
                        data.slice(0,3).map((movie) => {
                            return(
                                <div className=" flex items-center justify-center h-60 w-[30rem] overflow-hidden p-5 bg-secondry gap-8 rounded-xl py-28 px-10 hover:scale-110 hover:bg-purple transition-all group m-5">
                                    <img src={movie.thumbnail} className=" object-cover max-w-48 max-h-48 rounded-xl"/>
                                    <div className="">
                                        <h1 className=' text-2xl text-white font-bold mb-5'>{movie.title.slice(0 , 20)}</h1>
                                        {/* ---------------Ratings------------ */}
                                        {/* <div className="flex gap-5 items-center my-1">
                                            <div>
                                                <FaImdb className=" text-imdb text-3xl"/>
                                                <h1 className=" font-bold text-white">8/10</h1>
                                            </div>
                                            <div>
                                                <SiRottentomatoes className=" text-rose-600 text-3xl"/>
                                                <h1 className=" font-bold text-white">88%</h1>
                                            </div>
                                        </div> */}
                                        {/* ----------------Genres------------------ */}
                                        <div className=" flex gap-2 my-2">
                                        {movie.genres.slice(0 , 5).map((genre) => {
                                            return(
                                                <div className=" text-gray-600 bg-yellow-400 rounded-md px-1 font-bold py-1 text-xs">
                                                    {genre}
                                                </div>
                                            )
                                        })}
                                        </div>
                                        <div className=" flex items-center  gap mt-3 gap-3">
                                            <button className="flex items-center justify-center bg-purple text-white text-xs px-2 py-2  rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-black hover:text-white transition-all duration-300 group-hover:bg-black group-hover:text-white"><AiOutlineInfoCircle className="mx-2"/>Info</button>
                                            <button className="flex items-center justify-center bg-white text-black  text-xs px-2 py-2 text-nowrap rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-black hover:text-white transition-all duration-300"><BiBookmark className="mx-2"/>Watch Later</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
    );
}

export default Movie;
