/* eslint-disable */
import { BiBookmark } from "react-icons/bi"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { SiRottentomatoes } from "react-icons/si"; 
import { FaImdb } from "react-icons/fa"; 
import React, { useEffect , useState , useMemo } from 'react';
import { data } from '../public/Data/editedData'
import { Link, useParams , useSearchParams } from "react-router";
import { actors } from "./DataEditing/actors";
import MovieCard from "./movieCard";



function Search() {

    const [isPageLoading , setIsPageLoading] = useState(false)
    const [loadingState , setLoadingState] = useState(0)

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

    useEffect(() => {
        setIsPageLoading(true)
        setTimeout(() => {setIsPageLoading(false)} , 1000)
      } , [location]) 
  
      // ----------------- loading bar setter -------------------
      useEffect(() => {
        setLoadingState(0)
        // Function to update the time elapsed
        const intervalId = setInterval(() => {
          setLoadingState(prevTime => prevTime + 1.5);  // Increment time by 1 second
        }, "1 ms");  // Update every second
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, [location]); 

    return (
    <>
    {!isPageLoading?
        <div className="flex flex-wrap mx-20  items-center justify-center mt-20 mb-96">
            {
                filteredData.length ? 
                filteredData.slice(0 , numberOfItems).map((movie) => {
                    return(
                        <MovieCard movie={movie} h={"13rem"} w={"30rem"}  imgH={"11rem"} imgW={"11rem"}/>
                    )
                })
                :<div className=" flex items-center justify-center text-white text-7xl font-black">
                    No Movies For You Today
                </div>
            }
            <div className="bg-purple text-white text-3xl font-semibold px-10 py-5 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-black transition-all cursor-pointer" onClick={(e) => setNumberOfItems(prev => prev + 10)}>Load More</div>
        </div>
        :<div className='bg-primary w-screen h-screen'>
            <div style={{ width: `${loadingState}%`, height: '1px', backgroundColor: "#9747ff" }}></div>
        </div>
        }
    </>
    );
}

export default Search;