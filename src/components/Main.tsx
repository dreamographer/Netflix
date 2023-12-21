import { useEffect, useState } from "react"
import requests from "../request"
import axios from "axios"
import {MovieType} from '../types/moviesType'
import config from "../config/TMDB"
const Main = () => {
  const [movies, setMovies] = useState<MovieType[]>([])
    const movie=movies[Math.floor(Math.random()*movies.length)]
    useEffect(()=>{
        axios.get(requests.requestPopular,config).then((res)=>{
            setMovies(res.data.results)
        }).catch((err)=>console.log(err));
    },[])
    
  return (
    <div className="w-full h-screen ">
        <div className="w-full h-full">
              <div className="absolute w-full h-screen xl:h-screen bg-gradient-to-r from-black"></div>
              <img className="w-full h-full xl:h-screen object-cover xl:object-top object-center" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
              <div className="absolute top-[20%] xl:top-[40%] right-[20%] md:left-8 p-5">
                <h1 className="text-3xl xl:text-5xl font-bold my-5 mx-3">{movie?.title}</h1>
                <button className="border border-gray-300 px-9 sm:px-10 py-3 mx-2 bg-white text-black">Play</button>
          <button className="border px-5 py-3 sm:px-10 border-gray-300">Watch</button>
                <p className="text-md font-medium my-5 mx-3">Released : {movie?.release_date}</p>
                <p className="w-full md:max-w-[70%] ml-2 xl:text-xl lg:max-w-[50%] xl:max-w-[35%] line-clamp-2">{movie?.overview}</p>
              </div>
        </div>
    </div>
  )
}

export default Main