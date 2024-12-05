/* eslint-disable */
import React from 'react';
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
    return (
    <>
        <div className=' mt-10 mx-24'>
            <h1 className=' text-white text-4xl mb-10'>Genres</h1>
            <div className=' flex flex-wrap'>
                {
                    genres.map((Genre) => {
                        return(
                            <div className=' text-white font-semibold bg-secondry px-3 py-3 mx-3 my-5 rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm'>
                                {Genre}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
    );
}

export default Genres;