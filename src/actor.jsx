/* eslint-disable */
import { BiBookmark } from "react-icons/bi"; 
import React, { useEffect , useState } from 'react';
import { actorsData } from '../public/Data/actorsomar';
import { data } from "../public/Data/editedData"
import { Link , useSearchParams , useLocation } from 'react-router';

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
    const [movies , setMovies] = useState({
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
      },)
    
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
        for(const Movie of data){
            if(Movie.cast.includes(actorData.name)){
                setMovies(prev => [...prev , Movie]);
                break;
            }
        }
    }


    // ----------------------actor setter ---------------
    useEffect(() => {
        findActor();
        findMovie();
        // console.log(movie , actorData)
        // console.log(movie)
    } ,)



    return (
    <>
        {/* ---------Banner------------ */}
        <div>
            <div style={{backgroundImage: `url(${movie.wideImg})`,height: '28rem',backgroundPosition: 'center',}}className="flex items-end justify-between">
                <div className=' ml-20 mb-5 text-white text-6xl font-bold absolute bottom-28'>
                    <h1 className='mb-3'>{actorData.name}</h1>
                    <h1 className=' font-medium text-2xl'>{movie.genres[0]} | {movie.release} | {movie.duration}</h1>
                    <div className=' border-2 border-white bg-secondry rounded-full overflow-hidden w-52 h-52 flex items-center justify-center ml-10 mt-3'>
                        <img src={actorData.img} alt="" className=' object-cover group-hover:opacity-0'/>
                    </div>
                </div>

            </div>
        </div>
        <div>
            
        </div>
    </>
    );
}

export default Actor;