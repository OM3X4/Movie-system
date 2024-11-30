/* eslint-disable */
import { BiBookmark } from "react-icons/bi"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { AiFillPlayCircle } from "react-icons/ai"; 
import React from 'react';
import { data } from "../public/Data/Movies";

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
        <div className=" pt-20 px-20 overflow-hidden w-full mb-96">
            <h1 className="text-5xl text-white font-semibold mb-14">Our Genres</h1>
            <div className=" flex">
                <div className=" bg-secondry w-56 rounded-2xl p-4 flex items-center flex-col justify-center hover:bg-purple duration-300 transition-all cursor-pointer group">
                    <div className="flex flex-wrap w-32 gap-1 mb-3 group-hover:w-[8.8rem] transition-all duration-200 ease-in">
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                    </div>
                    <h1 className=" text-white text-xl font-semibold">Action</h1>
                </div>
            </div>
            <div className=" flex">
                <div className=" bg-secondry w-56 rounded-2xl p-4 flex items-center flex-col justify-center hover:bg-purple duration-300 transition-all cursor-pointer group">
                    <div className="flex flex-wrap w-32 gap-1 mb-3 group-hover:w-[8.8rem] transition-all duration-200 ease-in">
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                    </div>
                    <h1 className=" text-white text-xl font-semibold">Aventure</h1>
                </div>
            </div>
            <div className=" flex">
                <div className=" bg-secondry w-56 rounded-2xl p-4 flex items-center flex-col justify-center hover:bg-purple duration-300 transition-all cursor-pointer group">
                    <div className="flex flex-wrap w-32 gap-1 mb-3 group-hover:w-[8.8rem] transition-all duration-200 ease-in">
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                    </div>
                    <h1 className=" text-white text-xl font-semibold">Comedy</h1>
                </div>
            </div>
            <div className=" flex">
                <div className=" bg-secondry w-56 rounded-2xl p-4 flex items-center flex-col justify-center hover:bg-purple duration-300 transition-all cursor-pointer group">
                    <div className="flex flex-wrap w-32 gap-1 mb-3 group-hover:w-[8.8rem] transition-all duration-200 ease-in">
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                        <img src="placeHolder.png" alt="" className=" w-[45%] rounded-md"/>
                    </div>
                    <h1 className=" text-white text-xl font-semibold">Drama</h1>
                </div>
            </div>
        </div>
    </>
    );
}

export default Home;