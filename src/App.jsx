import { BiSearchAlt } from "react-icons/bi"; 
/* eslint-disable */
import { CgProfile } from "react-icons/cg"; 
import { AiFillBell } from "react-icons/ai"; 
import { AiFillHome } from "react-icons/ai"; 
import { FaTheaterMasks } from "react-icons/fa"; 
import { FaTv } from "react-icons/fa"; 
import { BsCameraReels } from "react-icons/bs"; 
import { useState , useEffect} from 'react'
import Login from './Login'
import Home from './home'
import Movie from "./Movie";
import Search from './search'
import Genres from "./genres";
import { Routes , Route , Link , useLocation} from "react-router";


function App() {

  let location = useLocation()

  useEffect(() => {
    window.scrollTo(0 , 0)
  } , [location])

  const [ searchWord , setSearchWord] = useState("")

  return (
    <>
      <div className='h-full bg-dark_background flex overflow-x-hidden'>
        {/* ---side panel--- */}
        <div className=' bg-secondry w-[15vw] h-screen fixed brightness-90 flex items-center flex-col py-12'>
          <h1 className="text-white text-3xl font-bold mb-12 ml-3 lg:ml-0">Tasteful Picks</h1>
          <p className=" self-start ml-5 mb-3 text-gray-200">Menu</p>
          <div className="flex items-center text-2xl text-white font-medium self-start ml-5 mb-3 transition-all duration-100">
            <Link to={"/"}>
              <div className="flex items-center justify-between hover:text-purple cursor-pointer duration-100 transition-all">
                <AiFillHome className=" mr-2"/>
                <h1>Home</h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-2xl text-white font-medium self-start ml-5 mb-3 transition-all duration-100 w-full">
              <div className="flex items-center justify-between hover:text-purple cursor-pointer duration-100 transition-all">
                <BsCameraReels className=" mr-2"/>
                <h1>Movie</h1>
              </div>
          </div>
          <div className="flex items-center text-2xl text-white font-medium self-start ml-5 mb-3 transition-all duration-100">
            <div className="flex items-center justify-between hover:text-purple cursor-pointer duration-100 transition-all">
              <FaTv className=" mr-2"/>
              <h1>Shows</h1>
            </div>
          </div>
          <div className="flex items-center text-2xl text-white font-medium self-start ml-5 mb-3 transition-all duration-100">
              <Link to={"/genres"}>
                <div className="flex items-center justify-between hover:text-purple cursor-pointer duration-100 transition-all">
                  <FaTheaterMasks className=" mr-2"/>
                  <h1>Genres</h1>
                </div>
              </Link>
          </div>
        </div>
        <div className='flex flex-col'>
          {/* ------nav bar ------- */}
          <div className=' h-[9vh] w-[85vw] ml-[15vw] bg-navbar border border-search flex items-center justify-center gap-5 sticky top-0'>
              <input type="text" placeholder="Search for Movies , Shows..." className=" bg-search text-white w-[35vw] focus:w-[40vw] pr-5 pl-5 py-2 rounded-full transition-all duration-100" onChange={(e) => setSearchWord(e.target.value)}/>
              <Link to={`/search/?word=${searchWord}`}><div className=" text-white text-3xl hover:text-purple transition-all cursor-pointer"><BiSearchAlt /></div></Link>
              <AiFillBell className=" text-white text-2xl hover:text-purple duration-100 transition-all cursor-pointer ml-32"/>
              <CgProfile className=" text-2xl text-white"/>
          </div>
          <div className='flex-1 ml-[15vw] min-h-[91vh]'>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/search/" element={<Search />}/>
              <Route path="/genres" element={<Genres />} />
              <Route path="/movie" element={<Movie />} />
            </Routes>
          </div>
        </div>
      </div>
    </>  
  )
}

export default App
