/* eslint-disable */
import { BiBookmark } from "react-icons/bi"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { SiRottentomatoes } from "react-icons/si"; 
import { FaImdb } from "react-icons/fa"; 
import React, { useEffect } from 'react';
import { data } from '../public/Data/editedData'
import { useParams } from "react-router";



function Search() {


    let { search } = useParams();


    useEffect(() => {
        console.log(data.slice(0 , 10))
    })
    return (
    <>
        <div className="flex flex-wrap mx-20  items-center justify-center mt-20 mb-96">
            {
                data.filter((movie) => {
                    if(movie.title.toLowerCase().includes(search.toLowerCase())){
                        return true;
                    }else if(search.toLowerCase().includes(movie.title.toLowerCase())){
                        return true;
                    }else if(movie.genres.some(item => item.includes(search.toLowerCase()))){
                        return true;
                    }else if( movie.extract ? movie.extract.toLowerCase().includes(search) : false){
                        return true;
                    }else if( search == movie.year){
                        return true;
                    }else if(movie.cast.some(item => item.toLowerCase().includes(search.toLowerCase()))){
                        return true;
                    }
                }).slice(0 , 10).map((movie) => {
                    return(
                        <div className="relative flex items-center justify-center h-52 w-[30rem] overflow-hidden p-5 bg-secondry rounded-xl  hover:scale-125 hover:delay-[1000ms] hover:bg-purple transition-all group m-5 hover:z-50 cursor-pointer">
                                    <div className=' flex gap-5 items-center justify-center'>
                                        <img src={movie.thumbnail ? movie.thumbnail : "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"} className=" object-cover max-w-[11rem] max-h-[11rem] rounded-xl"/>
                                        <div className="">
                                            <h1 className=' text-xl text-white font-bold mb-5'>{movie.title.slice(0 , 20)}</h1>
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
                                    <img src={movie.wideImg} alt="" className=' absolute opacity-0 group-hover:opacity-100 transition-all group-hover:delay-[1000ms]'/>
                                    <iframe
                                        className=' absolute opacity-0 hover:opacity-100 transition-all hover:delay-[1800ms]'
                                        width="720"
                                        height="405"
                                        src={("trailer" in movie ? movie.trailer : "https://www.youtube.com/embed/aDm5WZ3QiIE") + "?autoplay=1&mute=1&start=30&modestbranding=1&rel=0&loop=1&playlist=" + ("trailer" in movie ? movie.trailer : "https://www.youtube.com/embed/").split('/').pop()}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading='lazy'
                                    ></iframe>
                                </div>
                    )
                })
            }
        </div>
    </>
    );
}

export default Search;