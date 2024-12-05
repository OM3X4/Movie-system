/* eslint-disable */
import React, { useState } from 'react';
const genres = [
    "Comedy",
    "Mystery",
    "Thriller",
    "Crime",
    "Horror",
    "Action",
    "Adventure",
    "Fantasy",
    "Darma",
    "War",
    "Superhero",
    "Supernatural",
    "Western",
    "Romance",
    "Sports",
    "Documentary",
    "Animation",
    "Science Fiction"
]

function Genres() {

    const [buttons , setButtons] = useState({
        "Comedy" : false,
        "Mystery" :false,
        "Thriller":false,
        "Crime":false , 
        "Horror":false ,
        "Action":false , 
        "Adventure":false ,
        "Fantasy": false,
        "Darma": false,
        "War": false,
        "Superhero": false,
        "Supernatural": false,
        "Western": false,
        "Romance": false,
        "Sports": false,
        "Documentary": false,
        "Animation": false,
        "Science Fiction": false
    })



    return (
    <>
        <div className=' mt-10 mx-24'>
            <h1 className=' text-white text-4xl mb-10'>Genres</h1>
            <div className=' flex flex-wrap'>
                {
                    genres.map((Genre) => {
                        return(
                            <button className={` text-white font-semibold bg-${buttons.Genre ? "purple" : "secondry"} px-3 py-3 mx-3 my-5 rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm hover:scale-110 hover:bg-purple transition-all cursor-pointer`}>
                                {Genre}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    </>
    );
}

export default Genres;