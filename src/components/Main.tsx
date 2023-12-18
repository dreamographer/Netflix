import { useEffect, useState } from "react"
import requests from "../request"
import axios from "axios"

const Main = () => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGI1MWYwODc5MjI3NzE5ZTkwMGY3OWVhNjk2OTcwOCIsInN1YiI6IjY1N2YzYjgyMTI0YzhkMjIwZDM4YTBmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QcyRS6RDYyw-QuCLdOaRxhn25gpkdCv25njrYtcEEPY'
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    type Movie = {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    };
    const [movies,setMovies]=useState<Movie[]>([])
    const movie=movies[Math.floor(Math.random()*movies.length)]

    useEffect(()=>{
        axios.get(requests.requestPopular,config).then((res)=>{
            console.log(res.data);
            
            setMovies(res.data.results)
        }).catch((err)=>console.log(err));
    },[])
    
  return (
    <div className="w-full h-[550px]">
        <div className="w-full h-full">
              <div className="absolute w-full h-[550px] xl:h-screen bg-gradient-to-r from-black"></div>
              <img className="w-full h-full xl:h-screen object-cover xl:object-top" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie?.title} />
              <div className="absolute top-[20%] xl:top-[40%] right-[20%] md:left-8 p-5">
                <h1 className="text-3xl xl:text-5xl font-bold my-5 mx-3">{movie.title}</h1>
                <button className="border border-gray-300 px-10 py-3 mx-2 bg-white text-black">Play</button>
                <button className="border px-10 py-3 border-gray-300">Watch</button>
                <p className="text-md font-medium my-5 mx-3">Released : {movie.release_date}</p>
                <p className="w-full md:max-w-[70%] ml-2 xl:text-xl lg:max-w-[50%] xl:max-w-[35%] line-clamp-3">{movie.overview}</p>
              </div>
        </div>
    </div>
  )
}

export default Main