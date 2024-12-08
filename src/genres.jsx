/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { actors } from './DataEditing/actors';
import { Link } from 'react-router';
import { useSearchParams } from 'react-router';

const genres = [
    "Comedy",
    "Mystery",
    "Thriller",
    "Crime",
    "Horror",
    "Action",
    "Adventure",
    "Fantasy",
    "Drama",
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

    const [year , setYear] = useState("0")
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
    const [actor , setActor] = useState("0")
    const [Genres , setGenres] = useState([]);

    useEffect(() => {
        console.log(actor)
    })


    function handleYear(e){
        setYear(e.target.value)
    }

    function toggleButton(button){
        const copy = {...buttons};
        copy[button] = !buttons[button];
        if(!Genres.includes(button) && copy[button]){
            setGenres(prev => [...prev , button])
        }else if(!Genres.includes(button)){
            setGenres(prev => prev.pop(button))
        }
        setButtons(copy)
    }



    return (
    <>
        <div className=' mt-10 mx-24'>
            <h1 className=' text-white text-4xl mb-10'>Genres</h1>
            <div className=' flex flex-wrap'>
                {
                    genres.map((Genre) => {
                        return(
                            <button 
                            className={` text-white font-semibold bg-${buttons[Genre] ? "purple" : "secondry"} px-3 py-3 mx-3 my-3 rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm ${!buttons[Genre] ? "hover:scale-110 hover:bg-search" : ""} transition-all cursor-pointer`}
                            onClick={() => toggleButton(Genre)}>
                                {Genre}
                            </button>
                        )
                    })
                }
            </div>
            <div className=' flex gap-20 mb-20 ml-5 mt-10 items-center'>
                <div>
                    <h1 className=' text-4xl text-white mb-5'>Year</h1>
                    <select name="" id="" 
                    className='bg-secondry py-3 px-3 font-semibold caret-white  rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm outline-none focus:border-purple focus:border text-white'
                    onChange={handleYear}>
                        <option value="0">Any</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                    </select>
                    {/* <input type="menu" className='bg-secondry py-2 px-2 caret-white  rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm outline-none focus:border-purple focus:border text-white'/> */}
                </div>
                <div className=''>
                    <h1 className=' text-4xl text-white mb-5'>Actor</h1>
                    <input className="bg-secondry py-3 px-3 font-semibold caret-white  rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm outline-none focus:border-purple focus:border text-white"
                        type="text"
                        list="actorsList"
                        // value={actor}
                        onChange={(e) => setActor(e.target.value)}
                        placeholder="Choose an actor"
                    />
                    <datalist id="actorsList">
                        <option value="Any">Any</option>
                        {actors.map((actorName, index) => (
                        <option key={index} value={actorName} />
                        ))}
                    </datalist>
                </div>
            </div>
            <div className=' flex items-center justify-center w-full'>
                <Link to={`/search/?${(year != "0"  && year != null) ? ("year=" + year + "&") : ""}${Genres.length > 0 ? "genres=" + [...Genres].map(genre => genre) + "&" : ""}${actor != "0" ? "actor=" + actor + "&" : ""}`}
                className='w-full'>
                    <button className=' text-5xl text-white bg-secondry w-[100%] mx-auto py-3 font-bold mb-28 rounded-2xl hover:bg-purple transition-all'>Search</button>
                </Link>
            </div>
        </div>
    </>
    );
}

export default Genres;