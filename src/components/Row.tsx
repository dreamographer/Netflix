import axios from "axios"
import { useEffect, useState } from "react"
import config from "../config/TMDB"
import Movie from "./Movie"
import { MovieType } from "../types/moviesType"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

interface Props{
    title:string,
    fetchURL:string
    rowId:string
}
const Row = ({ title, fetchURL, rowId }:Props) => {
    const [movies, setMovies] = useState<MovieType[]>([])
    useEffect(()=>{
        axios.get(fetchURL,config).then((res)=>{
            setMovies(res.data.results)
        }).catch((rej)=>console.log(rej))
    }, [fetchURL])

    const slideLeft=()=>{
        let slider = document.getElementById('slider' + rowId)
        if (slider) {
            slider.scrollLeft = slider.scrollLeft - 1000
        }
    }   
    const slideRight=()=>{
        let slider = document.getElementById('slider' + rowId)
        if (slider) {
            slider.scrollLeft = slider.scrollLeft + 1000
        }
    }   

  
  return (
    <>
    <h2 className="p-4">{title}</h2>
          <div className="relative group  flex  items-center">
            <MdChevronLeft onClick={slideLeft} className='bg-white left-0  cursor-pointer  rounded-full absolute z-[100] opacity-50 hidden group-hover:block  hover:opacity-100 text-gray-400' size={35} />
              <div className=" w-full h-full overflow-x-scroll relative whitespace-nowrap scrollbar-hide scroll-smooth" id={"slider" + rowId}>
            {movies.map((item,id)=>
                <Movie item={item} key={id}></Movie>
            )}
        </div>
              <MdChevronRight onClick={slideRight} className='bg-white group-hover:block cursor-pointer right-0 z-[100]  rounded-full absolute opacity-50 hidden  hover:opacity-100 text-gray-400' size={35}/>
    </div>
    
    </>
  )
}

export default Row  