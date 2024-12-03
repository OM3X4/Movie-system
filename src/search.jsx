/* eslint-disable */
import { BiBookmark } from "react-icons/bi"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { SiRottentomatoes } from "react-icons/si"; 
import { FaImdb } from "react-icons/fa"; 
import React from 'react';
import { data } from '../public/Data/Movies'

function Search() {
    return (
    <>
        <div className="flex flex-wrap mx-20  items-center justify-center mt-20 mb-96">
            {
                data.slice(0 , 10).map((movie) => {
                    return(
                        <div className=" flex items-center justify-center h-60 w-[30rem] overflow-hidden p-5 bg-secondry gap-8 rounded-xl py-28 px-10 hover:scale-110 hover:bg-purple transition-all group m-5">
                            <img src={movie.thumbnail} className=" object-cover max-w-48 max-h-48 rounded-xl"/>
                            <div className="">
                                <h1 className=' text-2xl text-white font-bold mb-5'>{movie.title.slice(0 , 20)}</h1>
                                {/* ---------------Ratings------------ */}
                                <div className="flex gap-5 items-center my-1">
                                    <div>
                                        <FaImdb className=" text-imdb text-3xl"/>
                                        <h1 className=" font-bold text-white">8/10</h1>
                                    </div>
                                    <div>
                                        <SiRottentomatoes className=" text-rose-600 text-3xl"/>
                                        <h1 className=" font-bold text-white">88%</h1>
                                    </div>
                                </div>
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
    </>
    );
}

export default Search;