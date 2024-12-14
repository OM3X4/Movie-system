/* eslint-disable */
import { BiBookmark } from "react-icons/bi"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { AiFillPlayCircle } from "react-icons/ai"; 
import React from 'react';
import { data } from "../public/Data/editedData";
import { actors } from "../public/Data/actors";
import { Link } from "react-router";
const sortDate = data.sort((a , b) => (new Date(b.release) || 0) - (new Date(a.release) || 0));

const MainGenres = ["Comedy" , "Action" , "Drama" , "Animation"]

function Home() {
    return (
    <>
        {/* -----------banner----------- */}
        <div className=' w-[full] h-[400px] overflow-hidden flex items-center justify relative bg-[url("public/joker-wide.jpg")] bg-center bg-cover'>
            {/* <img src='public/joker-wide.jpg' className=' object-cover brightness-50'/> */}
            <div className=' absolute bottom-10 text-white font-bold ml-7 flex flex-1'>
                <div className=" w-[60%]">
                    <h1 className=' text-6xl font-extralight mb-3'>JOKER 2</h1>
                    <p className=' my-2 text-gray-300 font-medium'>2h 18m - 2024 - Cinema , Drama , Musical , Theiler</p>
                    <p className=' text-gray-200 font-semibold'>Failed comedian Arthuer Fleck meets the love of his life,
                    Harley Quinn , while in arkham State Hospital. Upon release.
                    the pair embark on a doomed romatinc misadventure</p>
                </div>
                <div className="ml-10 self-end flex justify-center items-center">
                    <button className="flex items-center justify-center bg-white text-black w-32 text-sm mx-2 px-2 py-3 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-black hover:text-white transition-all duration-300"><AiFillPlayCircle className="mx-1"/>Watch Trailer</button>
                    <button className="flex items-center justify-center bg-purple text-white w-32 text-sm mx-2 py-3 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-black hover:text-white transition-all duration-300"><AiOutlineInfoCircle className="mx-2"/>Info</button>
                    <button className="flex items-center justify-center bg-primary text-white w-32 text-sm mx-2 px-2 py-3 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-purple hover:text-white transition-all duration-300"><BiBookmark />Watch List</button>
                </div>
            </div>
        </div>
        {/* ----------Genres---------- */}
        <div className=" pt-20 px-20 overflow-hidden w-full mb-10">
            <h1 className="text-5xl text-white font-semibold mb-14">Our Genres</h1>
            <div className=" flex items-center justify-center gap-10">
                {
                    MainGenres.map((genre) => {
                        return (
                            <div className=" flex">
                                <Link to={`/search/?genres=${genre}`}>
                                    <div className=" bg-secondry w-56 rounded-2xl mx-auto px-4 py-3 flex items-center flex-col justify-center hover:bg-purple duration-300 transition-all cursor-pointer group hover:scale-110">
                                        <div className="flex flex-wrap items-center justify-center w-40 gap-1 mb-3 group-hover:scale-110 transition-all duration-200 ease-in">
                                            {data.filter((movie) => {
                                                if(movie.genres.includes(genre)){
                                                    return true;
                                                }
                                            }).slice(0 , 4).map((movie) => {
                                                return <img src={movie.thumbnail} alt="" className=" max-w-20 max-h-24 rounded-md object-cover"/>
                                            })
                                            }
                                        </div>
                                        <h1 className=" text-white text-xl font-semibold">{genre}</h1>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        {/* ---------------- new releases ---------------- */}
        <div className=" pt-20 px-20 overflow-hidden w-full ">
            <h1 className="text-5xl text-white font-semibold mb-14">New Releases</h1>
            <div className=" flex items-center justify-center gap-10">
                { sortDate.slice(0 , 4).map(movie => {
                    return(
                        <Link to={`/movie/?name=${movie.title}`}>
                            <div className=" flex h-[300px]">
                                <div className=" bg-secondry w-56 rounded-2xl p-4 flex items-center flex-col justify-between hover:bg-purple duration-300 transition-all cursor-pointer group hover:scale-105">
                                    <div className="flex flex-wrap w-32 gap-1 mb-3 group-hover:scale-105 transition-all duration-200 ease-in">
                                        <img src={movie.thumbnail} alt={movie.title}  className=" rounded-xl "/>
                                    </div>
                                    <div className=" bg-zinc-800 px-4 py-1 text-sm rounded-full font-bold text-gray-300 ">Released at {movie.release ? movie.release : movie.year}</div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
        {/* ----------------Actors----------------- */}
        <div className="mx-20 mt-32">
            <h1 className=" text-white font-semibold text-5xl mb-7">Characters</h1>
            <div className=" flex items-center justify-center gap-8 mb-20">
                {actors.map(actor => {
                    return (
                        <Link to={`/search/?actor=${actor.Name}`}>
                            <div className=" size-44 overflow-hidden rounded-full hover:scale-[118%] transition-all cursor-pointer">
                                <img src={actor.img} alt="" className="object-cover"/>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
        {/* -------------Footer------------ */}
        <div className=" text-white h-20 w-full bg-search flex items-center justify-center">
            ©All Copy Rights Reserved
        </div>

    </>
    );
}

export default Home;