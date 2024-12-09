/* eslint-disable */
import { BiBookmark } from "react-icons/bi"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { SiRottentomatoes } from "react-icons/si"; 
import { FaImdb } from "react-icons/fa"; 
import React, { useEffect , useState , useMemo } from 'react';
import { data } from '../public/Data/editedData'
import { Link, useParams , useSearchParams } from "react-router";
import { actors } from "./DataEditing/actors";



function Search() {


    const [numberOfItems , setNumberOfItems] = useState(10)

    let [searchParams , setSearchParams] = useSearchParams()

    let search = searchParams.get("word")
    let year = searchParams.get("year")
    let actor = searchParams.get("actor")
    let genres = searchParams.get("genres")
    if(genres){
        genres = genres.split(',')
    }
    
    function filtering(){
        return data.filter((movie) => {
            if(year && movie.year != year){
                return false;
            }else if(genres && !genres.every(genre => movie.genres.includes(genre))){
                return false;
            }else if(actor && !movie.cast.includes(actor)){
                return false;
            }else if(search && movie.title.toLowerCase().includes(search.toLowerCase())){
                return true;
            }else if(search && search.toLowerCase().includes(movie.title.toLowerCase())){
                return true;
            }else if(search && movie.genres.some(item => item.includes(search.toLowerCase()))){
                return true;
            }else if(search && movie.extract ? movie.extract.toLowerCase().includes(search) : false){
                return true;
            }else if(search && search == movie.year){
                return true;
            }else if(search && movie.cast.some(item => item.toLowerCase().includes(search.toLowerCase()))){
                return true;
            }else if(!search){
                return true;
            }})
    }

    const filteredData = useMemo(() => filtering() , [search , year , actor , genres])


    return (
    <>
        <div className="flex flex-wrap mx-20  items-center justify-center mt-20 mb-96">
            {
                filteredData.length ? 
                filteredData.slice(0 , numberOfItems).map((movie) => {
                    return(
                        <Link to={`/movie/?name=${movie.title}`}>
                            <div className="relative flex items-center justify-center h-52 w-[30rem] overflow-hidden p-5 bg-secondry rounded-xl  hover:scale-125 hover:delay-[1000ms] hover:bg-purple transition-all group m-5 hover:z-50 cursor-pointer">
                                        <div className=' flex gap-5 items-center justify-center'>
                                            <img src={movie.thumbnail ? movie.thumbnail : "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"} className=" object-cover max-w-[11rem] max-h-[11rem] rounded-xl"/>
                                            <div className="">
                                                <h1 className=' text-xl text-white font-bold mb-5'>{movie.title}</h1>
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
                    )
                })
                :<div className=" flex items-center justify-center text-white text-7xl font-black">
                    No Movies For You Today
                </div>
            }
            <div className="bg-purple text-white text-3xl font-semibold px-10 py-5 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-black transition-all cursor-pointer" onClick={(e) => setNumberOfItems(prev => prev + 10)}>Load More</div>
        </div>
    </>
    );
}

export default Search;