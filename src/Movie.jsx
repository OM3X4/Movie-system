/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { BiBookmark } from "react-icons/bi"; 
import { SiRottentomatoes } from "react-icons/si"; 
import { FaImdb } from "react-icons/fa"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { AiFillPlayCircle } from "react-icons/ai"; 
import { data } from '../public/Data/editedData.js';
const MOVIENAME = "The Queen Gambit"


function Movie() {
    
    function similarity(data , film){

        let dataCopy = [...data];
        
        const scores = new Map();
        for (const movie of dataCopy) {
          let score = 0;
        
          // Genre matching (scaled by importance)
          for (const genre of movie.genres) {
            if (film.genres.includes(genre)) {
              score += 2;  // genre similarity is important
            }
          }
        
          // Cast matching (scaled by importance)
          for (const actor of movie.cast) {
            if (film.cast.includes(actor)) {
              score += 0.5; // cast similarity is less important
            }
          }
        
          // Year similarity
          if (movie.year === film.year) {
            score += 0.2;
          }
        
          // Rating similarity (scaled)
          const ratingDifference = Math.abs(movie.rating - film.rating);
          if (ratingDifference <= 1) {
            score += 1;
          } else if (ratingDifference <= 2) {
            score += 0.5;
          }
        
          // Duration similarity (if available)
          const filmDurationMinutes = convertDurationToMinutes(film.duration);
          const movieDurationMinutes = convertDurationToMinutes(movie.duration);
          const durationDifference = Math.abs(filmDurationMinutes - movieDurationMinutes);
          if (durationDifference <= 15) {
            score += 0.5; // small duration difference gives a slight score boost
          }
        
          scores.set(movie.title, score);
        }
        
        // Sorting the movies based on the score
        dataCopy = dataCopy.sort((a, b) => {
          const scoreA = scores.get(a.title) || 0;
          const scoreB = scores.get(b.title) || 0;
          if (scoreB === scoreA) {
            return a.year - b.year; // If scores are equal, prefer newer films
          }
          return scoreB - scoreA;
        });
        
        // console.log(dataCopy[2].title, scores.get(dataCopy[2].title));
        
        function convertDurationToMinutes(duration) {
            // Check if duration is a valid string
            if (typeof duration !== 'string' || !duration) {
                return 0;  // Return 0 if the duration is invalid or undefined
            }
        
            const parts = duration.split(' ');
            let hours = 0;
            let minutes = 0;
        
            // Check and process hours
            if (parts.length > 0 && parts[0].includes('h')) {
                hours = parseInt(parts[0].replace('h', '').trim());
            }
        
            // Check and process minutes
            if (parts.length > 1 && parts[1].includes('m')) {
                minutes = parseInt(parts[1].replace('m', '').trim());
            }
        
            return (hours * 60) + minutes;
        }
    
        return dataCopy;
    }

    const [movieData , setMovieData] = useState({
        title: "Breaking Bad",
        year: 2008,
        cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"],
        genres: ["Crime", "Drama"],
        href: "Breaking_Bad",
        extract:
          "Breaking Bad is a crime drama about Walter White, a high school chemistry teacher turned methamphetamine producer, and his descent into crime.",
        thumbnail:
          "https://rukminim2.flixcart.com/image/850/1000/kdga1zk0/poster/2/p/i/large-breakingbad04-breaking-bad-poster-breaking-bad-series-original-imafuc2fvfjyackz.jpeg?q=90&crop=false",
        rating: 8.917,
        wideImg: "https://image.tmdb.org/t/p/w1280/gc8PfyTqzqltKPW3X0cIVUGmagz.jpg",
        duration: "5 Seasons",
        release: "January 20, 2008",
        genre: "Drama",
        trailer: "https://www.youtube.com/embed/XZ8daibM3AE",
        reviews: [
          {
            author: "slyone10001",
            content:
              'Wow....where to start. Not really into "DRUG" inspired shows. But this one had me from the start. The only bad about this show was the split seasons when it was a first run show. But now you can go right through to the next episode with out having to wait.....MUST WATCH ! !',
            created_at: "April 10, 2018",
            url: "https://www.themoviedb.org/review/5accdbe6c3a3687e2702d058",
          },
          {
            author: "Dean",
            content:
              "I'll be honest, at first when I started this TV show and finished first season, I didn't like it. It felt boring for me and I stopped watching, but after few years, I decided to give it a chance and continue. I'm so happy because of my decision, because after finishing this TV show, I can definitely tell that it was a masterpiece! 5th season is a bomb and 14th season was shocking! It left me with sad, euphoric shock feeling. It was mind blowing! I'm not gonna spoil you what happened, but if you started first season and you don't like it, for goodness sake, give it a chance and continue watching. I promise you won't regret.\r\n\r\nCharacters are very well developed. Acting is superb! Plot is very interesting. Whole TV show is tense, especially the last season. The only downside I can think about is camera. Sometimes it's shaking on some certain scenes. I don't know why they didn't pay attention to this, but this is nothing, just a very minor minus. Everything else is great about this TV show.",
            created_at: "September 30, 2019",
            url: "https://www.themoviedb.org/review/5d91c4a2172d7f001759ca0a",
          },
          {
            author: "l33t5p34k3r",
            content:
              "Started out really good, but dropped quality after the second to last season",
            created_at: "June 10, 2020",
            url: "https://www.themoviedb.org/review/5ee08bdd90dde0001fa67192",
          },
          {
            author: "drystyx",
            content:
              'This is the kind of TV show for the "formula lovers" who want to feel superior.\r\nThere is an air of the superiority complex of the "drug knowledgeable" crowd in this series about a "smart guy" breaking into the drug trade.\r\nHis "talent" makes him the important cog in the machine. He can call his shots.\r\nStill, the ruffians give him a rough way to go, because criminals really are stupid.\r\nOnce they learn that they are nothing without him, he gets his way.\r\nMuch like a Western town blacksmith, he\'s the needed ingredient.\r\nHowever, things get very formula early on in the show. And there\'s always this sense of a superiority complex from the sort of people who push shows like this onto their friends and acquaintances. The directing writing team tap into the control freak crowd very well.\r\nBut it is a dull show about dull people.',
            created_at: "April 2, 2023",
            url: "https://www.themoviedb.org/review/6429b5168de0ae00978d836a",
          },
        ],
    })

    function findMovie(MOVIENAME){
        for(const i of data){
            if(i.title === MOVIENAME){
                setMovieData(i);
                console.log(i)
                break;
            }
        }
    }
    useEffect(() => {
        findMovie(MOVIENAME);
        console.log(movieData.wideImg)
    } , [])



return (
    <>
        <div>
            {/* ---------Banner------------ */}
            <div>
                <div style={{backgroundImage: `url(${movieData.wideImg})`,height: '28rem',backgroundPosition: 'center',}}className="flex items-end justify-between">
                        <div className=' ml-20 mb-5 text-white text-6xl font-bold'>
                            <h1 className='mb-3'>{movieData.title}</h1>
                            <h1 className=' font-medium text-2xl'>{movieData.genres[0]} | {movieData.release} | {movieData.duration}</h1>
                        </div>
                        <div className="ml-10 self-end flex justify-center items-center mr-20 mb-5">
                            <button className="flex items-center justify-center bg-primary text-white text-xl mx-2 px-10 py-4 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-purple hover:text-white transition-all duration-300"><BiBookmark />Watch List</button>
                        </div>
                </div>

            </div>
            <div className='flex justify-center mt-10 gap-10'>
                {/* -------------paragraph------------ */}
                <div>
                    <div className=' flex'>
                        {movieData.genres.map((genre) => {
                            return(
                                <div className='flex bg-yellow-500 text-gray-700 text-xl font-bold mx-3 py-2 px-4 rounded-3xl' >
                                    {genre}
                                </div>
                            )
                        })}
                    </div>
                    <div className='text-gray-200 text-2xl max-w-[40rem] ml-10 mt-10 mb-10'>
                        {movieData.extract}
                    </div>
                    <div>
                    <iframe
                        width="720"
                        height="405"
                        src={movieData.trailer}
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

                        similarity(data , movieData).slice(1,4).map((movie) => {
                            return(
                                <div className="relative flex items-center justify-center h-40 w-[25rem] overflow-hidden p-5 bg-secondry rounded-xl  hover:scale-125 hover:delay-[1000ms] hover:bg-purple transition-all group m-5">
                                    <div className=' flex gap-5 items-center justify-center'>
                                        <img src={movie.thumbnail ? movie.thumbnail : "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"} className=" object-cover max-w-32 max-h-32 rounded-xl"/>
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
                                        src={movie.trailer + "?autoplay=1&mute=1&start=30&modestbranding=1&rel=0&loop=1&playlist=" + movie.trailer.split('/').pop()}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading='lazy'
                                    ></iframe>
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
