/* eslint-disable */
import { BiBookmark } from "react-icons/bi"; 
import React, { useEffect , useState } from 'react';
import { actorsData } from '../public/Data/actorsomar';
import { data } from "../public/Data/editedData"
import { Link , useSearchParams , useLocation } from 'react-router';
import MovieCard from "./movieCard";

function Actor() {

    const location = useLocation()
    const [actorData , setActorData] = useState( {
        "name": "Tom Holland",
        "img": "https://image.tmdb.org/t/p/w500/1d67to0U8bx5jhWTanVx37k6Nd0.jpg",
        "wideImg": "https://image.tmdb.org/t/p/w1280/1d67to0U8bx5jhWTanVx37k6Nd0.jpg",
        "biography": "Thomas \"Tom\" Stanley Holland is an English actor and dancer.\n\nHe is best known for playing Peter Parker / Spider-Man in the Marvel Cinematic Universe and has appeared as the character in six films: Captain America: Civil War (2016), Spider-Man: Homecoming (2017), Avengers: Infinity War (2018), Avengers: Endgame (2019), Spider-Man: Far From Home (2019), and Spider-Man: No Way Home (2021).\n\nHe is also known for playing the title role in Billy Elliot the Musical at the Victoria Palace Theatre, London, as well as for starring in the 2012 film The Impossible.",
        "birthday": "1996-06-01",
        "place_of_birth": "Surrey, England, UK",
        "popularity": 38.799,
        "gender": "Male",
        "known_for": [],
        "social": {}
    },)
    const [movies , setMovies] = useState([{
        "title": "Breaking Bad",
        "year": 2008,
        "cast": [
          "Bryan Cranston",
          "Aaron Paul",
          "Anna Gunn",
          "Dean Norris"
        ],
        "genres": [
          "Crime",
          "Drama"
        ],
        "href": "Breaking_Bad",
        "extract": "Breaking Bad is a crime drama about Walter White, a high school chemistry teacher turned methamphetamine producer, and his descent into crime.",
        "thumbnail": "https://rukminim2.flixcart.com/image/850/1000/kdga1zk0/poster/2/p/i/large-breakingbad04-breaking-bad-poster-breaking-bad-series-original-imafuc2fvfjyackz.jpeg?q=90&crop=false",
        "rating": 8.917,
        "wideImg": "https://image.tmdb.org/t/p/w1280/gc8PfyTqzqltKPW3X0cIVUGmagz.jpg",
        "duration": "5 Seasons",
        "release": "January 20, 2008",
        "genre": "Drama",
        "trailer": "https://www.youtube.com/embed/XZ8daibM3AE",
    }])
    const [movie , setMovie] = useState()
    
    const ACTORNAME = useSearchParams()[0].get("name")


    function findActor(){
        for(const actor of actorsData){
            if(actor.name == ACTORNAME){
                setActorData(actor);
                break;
            }
        }
    }

    function findMovies(){
        setMovies([])
        for(const Movie of data){
            if(Movie.cast.includes(actorData.name)){
                console.log(Movie)
                setMovies(prev => [...prev , Movie]);
            }
        }
    }

    function chooseMovie(){
        movies.sort((a , b) => movie.rating / a.cast.indexOf(actorData.name) - movie.rating / b.cast.indexOf(actorData.name))
    }


    // ----------------------actor setter ---------------
    useEffect(() => {
        findActor();
        findMovies();
        setMovies(movies => movies.sort((a, b) => {
            const indexA = a.cast.indexOf(actorData.name);
            const indexB = b.cast.indexOf(actorData.name);
        
            // Sort primarily by index of the actor
            if (indexA !== indexB) {
                return indexA - indexB; // Smaller index comes first
            }
        
            // If indices are the same, sort by rating (higher rating first)
            return b.rating - a.rating;
        })
        )
        // console.log(movie , actorData)
        // console.log(movie)
    } , [actorData])



    return (
    <>
        {/* ---------Banner------------ */}
        <div>
            <div style={{backgroundImage: `url(${movies[0].wideImg})`,height: '28rem',backgroundPosition: 'center',}}className="flex items-end justify-between">
                <div className=' ml-20 mb-5 text-white text-6xl font-bold absolute bottom-28'>
                    <h1 className='mb-3 text-8xl font-extrabold'>{actorData.name}</h1>
                    {/* <h1 className=' font-medium text-2xl'>{movies[0].genres[0]} | {movies[0].release} | {movies[0].duration}</h1> */}
                    <div className=' border-2 border-white bg-secondry rounded-full overflow-hidden w-52 h-52 flex items-center justify-center ml-10 mt-3'>
                        <img src={actorData.img} alt="" className=' object-cover group-hover:opacity-0'/>
                    </div>
                </div>

            </div>
        </div>
        <div className=" flex items-center justify-center mt-28">
            {/* ------------------- Left Side ---------------------- */}
            <div>
                {/* ------------------------ Paragraph ----------------------- */}
                <div className=" mx-10 text-white text-xl">
                    {actorData.biography}
                </div>
                {/* -------------- Another Data --------------------- */}
                <div className=" mx-10 flex mt-5">
                    <div className="mx-5 bg-yellow-500 py-2 px-3 rounded-full font-medium">{actorData.birthday}</div>
                    <div className="mx-5 bg-yellow-500 py-2 px-3 rounded-full font-medium">{actorData.place_of_birth}</div>
                </div>
            </div>
            <div className=' flex flex-col items-center mt-20'>
                    <h1 className=' text-white text-4xl font-bold '>Known For</h1>
                    {
                        movies.slice(0,3).map((movie) => {
                            return(
                                <MovieCard movie={movie} h="12rem" w="25rem" imgH="10rem" imgW={"10rem"} />
                            )
                        })
                    }
            </div>
        </div>
    </>
    );
}

export default Actor;