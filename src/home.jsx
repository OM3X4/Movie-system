import { BiBookmark } from "react-icons/bi"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { AiFillPlayCircle } from "react-icons/ai"; 
/* eslint-disable */
import React from 'react';

function Home() {
    return (
    <>
        {/* -----------banner----------- */}
        <div>
            <div className=' w-full h-[60vh] overflow-hidden flex items-center justify relative bg-[url("public/joker-wide.jpg")] bg-center bg-cover'>
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
                        <button className="flex items-center justify-center bg-white text-black w-32 text-sm mx-2 px-2 py-2 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-black hover:text-white transition-all duration-300"><AiFillPlayCircle className="mx-1"/>Watch Trailer</button>
                        <button className="flex items-center justify-center bg-purple text-white w-32 text-sm mx-2 py-2 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-black hover:text-white transition-all duration-300"><AiOutlineInfoCircle className="mx-2"/>Info</button>
                        <button className="flex items-center justify-center bg-primary text-white w-32 text-sm mx-2 px-2 py-2 rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl hover:bg-purple hover:text-white transition-all duration-300"><BiBookmark />Watch List</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Home;