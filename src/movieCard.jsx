import { BiBookmark } from "react-icons/bi"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
/* eslint-disable */
import React from 'react';
import { Link } from 'react-router';

function MovieCard({movie , w , h , imgH , imgW}) {

    return (
    <>
        <Link to={`/movie/?name=${movie.title}`}>
            <div className={`relative flex items-center justify-center overflow-hidden p-5 bg-secondry rounded-xl  hover:scale-125 hover:delay-[1000ms] hover:bg-purple transition-all group m-5 hover:z-50 cursor-pointer`}
            style={{width: w , height: h}}>
                <div className=' flex gap-5 items-center justify-center'>
                    <img src={movie.thumbnail ? movie.thumbnail : "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"} className={`object-cover rounded-xl`} style={{maxWidth: imgW , maxHeight: imgH}}/>
                    <div className="">
                        <h1 className=' text-xl text-white font-bold mb-5'>{movie.title}</h1>
                        {/* ----------------Genres------------------ */}
                        <div className=" flex gap-2 my-2 flex-wrap">
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
                    className=' absolute opacity-0 group-hover:opacity-100 transition-all group-hover:delay-[1800ms] pointer-events-none'
                    width="720"
                    height="405"
                    src={
                        (() => {
                            const trailerUrl = movie?.trailer || "https://www.youtube.com/embed/aDm5WZ3QiIE";
                            const videoId = trailerUrl.split('/').pop();
                            return `${trailerUrl}?autoplay=1&mute=1&start=30&modestbranding=1&rel=0&loop=1&playlist=${videoId}`;
                        })()
                        }
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading='lazy'
                >
                </iframe>
            </div>
        </Link>
    </>
    );
}

export default MovieCard;