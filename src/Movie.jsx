/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { BiBookmark } from "react-icons/bi"; 
import { SiRottentomatoes } from "react-icons/si"; 
import { FaImdb } from "react-icons/fa"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { AiFillPlayCircle } from "react-icons/ai"; 
import { data } from '../public/Data/Movies';
const title = "breaking bad"

function Movie() {

    const [wideImg , setWideImg] = useState();
    const [rating , setRating] = useState();
    const [trailer , setTrailer] = useState();
    const [movieName , setMovieName] = useState();
    const [duration , setDuration] = useState();
    const [release , setRelease] = useState();
    const [mainGenre , setMainGenre] = useState();


    useEffect(() => {
        const imageBaseUrl = "https://image.tmdb.org/t/p/w1280"; // Use w1280 for wide images (larger size)
        const apiKey = "726d3a47d08b0364c890983eb5d5111c";
        const movieName = title
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${movieName}`)
        .then(response => response.json())
        .then(data => {
          const movie = data.results[0]; // Take the first result (if any)
          const movieId = movie.id;
          const type = movie.media_type
      
          // Fetch movie details using the movie ID to get ratings and backdrops
          fetch(`https://api.themoviedb.org/3/${type}/${movieId}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(movieDetails => {
                setMovieName(movieDetails.title)
                setRating(movieDetails.vote_average);

              // Get the backdrop image URL (wide image)
                const backdropPath = movieDetails.backdrop_path ? imageBaseUrl + movieDetails.backdrop_path : null;
              if (backdropPath) {
                setWideImg(backdropPath)
              } else {
                console.log("No backdrop image available.");
              }
            
            const runtime = movieDetails.runtime; // Duration in minutes
            if(type == "movie"){
                if (runtime) {
                    const hours = Math.floor(runtime / 60);  // Convert to hours
                    const minutes = runtime % 60;           // Remaining minutes
                    setDuration(`${hours}h ${minutes}m`);   // Set the formatted duration
                } else {
                    console.log("No runtime information available.");
                }
            }else{
                setDuration(movieDetails.number_of_seasons + " Seasons")
            }

            const releaseDate = type == "movie" ? movieDetails.release_date : movieDetails.first_air_date; // Release date in the format YYYY-MM-DD
            if (releaseDate) {
                // Optionally, format the release date
                const formattedReleaseDate = new Date(releaseDate).toLocaleDateString("en-US", {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                setRelease(formattedReleaseDate); // Set the formatted release date
            } else {
                console.log("No release date available.");
            }

            const genres = movieDetails.genres;
            if (genres && genres.length > 0) {
                setMainGenre(genres[0].name); // Set the name of the first genre
            } else {
                console.log("No genres available.");
            }

            
              // Fetch movie trailers
              fetch(`https://api.themoviedb.org/3/${type}/${movieId}/videos?api_key=${apiKey}`)
                .then(response => response.json())
                .then(videoData => {
                  const trailers = videoData.results.filter(video => video.type === "Trailer");
                  if (trailers.length > 0) {
                    trailers.forEach(trailer => {
                        setTrailer(`https://www.youtube.com/embed/${trailer.key}`);
                    });
                  } else {
                    console.log("No trailers found.");
                  }
                });
            });
        })
        .catch(error => console.error("Error fetching movie data:", error));
    } , [])



    return (
    <>
        <div>
            {/* ---------Banner------------ */}
            <div>
                <div style={{backgroundImage: `url(${wideImg})`,height: '24rem',backgroundPosition: 'center',}}className="flex items-end justify-between">
                        <div className=' ml-20 mb-5 text-white text-6xl font-bold'>
                            <h1 className='mb-3'>{movieName ? movieName : title}</h1>
                            <h1 className=' font-medium text-2xl'>{mainGenre} | {release} | {duration}</h1>
                        </div>
                        <div className="ml-10 self-end flex justify-center items-center mr-20 mb-5">
                            <button className="flex items-center justify-center bg-primary text-white text-xl mx-2 px-10 py-4 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-purple hover:text-white transition-all duration-300"><BiBookmark />Watch List</button>
                        </div>
                </div>

            </div>
            <div className='flex justify-center mt-10 gap-10'>
                {/* -------------paragraph------------ */}
                <div>
                    <div className='text-gray-200 text-2xl max-w-[40rem] ml-10 mt-10 mb-10'>
                        Breaking Bad is a crime drama about Walter White,
                        a high school chemistry teacher turned methamphetamine producer, and his descent into crime.
                    </div>
                    <div>
                    <iframe
                        width="720"
                        height="405"
                        src={trailer}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>
                </div>

                {/* -------------------similar results----------- */}
                <div className=' flex flex-col items-center mt-20'>
                    <h1 className=' text-white text-2xl font-bold '>Similar Movies/Shows</h1>
                    {
                        data.slice(0,3).map((movie) => {
                            return(
                                <div className=" flex items-center justify-center h-40 w-[25rem] overflow-hidden p-5 bg-secondry gap-8 rounded-xl  hover:scale-110 hover:bg-purple transition-all group m-5">
                                    <img src={movie.thumbnail} className=" object-cover max-w-32 max-h-32 rounded-xl"/>
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
