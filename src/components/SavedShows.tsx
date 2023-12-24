import { useState,useEffect } from 'react'
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { AiOutlineClose } from 'react-icons/ai'
import { updateDoc ,doc,onSnapshot} from 'firebase/firestore'
type savedMovie={
    id:number,
    img:string,
    title:string
}
const SavedShows = () => {
    const [movies, setMovies] = useState<savedMovie[]>()
    const auth=UserAuth()
    if (!auth) {
        throw new Error("Auth context is null");
    }
    const { user } = auth;
    const slideLeft = () => {
        let slider = document.getElementById('slider' )
        if (slider) {
            slider.scrollLeft = slider.scrollLeft - 1000
        }
    }
    const slideRight = () => {
        let slider = document.getElementById('slider' )
        if (slider) {
            slider.scrollLeft = slider.scrollLeft + 1000
        }
    }  

    const MovieRef=doc(db,'users',`${user?.email}`)
    const deleteShow=async(id:number)=>{
        try {
            const res=movies?.filter((item)=>item.id!=id)
            await updateDoc(MovieRef,{
                SavedShows:res
            })
            console.log(res);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), {
            next: (doc) => {
                setMovies(doc.data()?.SavedShows)
            },
        });
    }, [user?.email])
  return (
      <>
          <div className="relative group  flex  items-center">
              <MdChevronLeft onClick={slideLeft} className='bg-white left-0  cursor-pointer  rounded-full absolute z-[100] opacity-50 hidden group-hover:block  hover:opacity-100 text-gray-400' size={35} />
              <div className=" w-full h-full overflow-x-scroll relative whitespace-nowrap scrollbar-hide scroll-smooth" id={"slider"}>
                  {movies?.map((item, id) =>
                      <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                          <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                          <div className='absolute top-0 left-0 w-full h-full overflow-hidden hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='white-space-normal  text-xs md:text-sm font-bold w-[260px] text-ellipsis flex justify-center items-center h-full text-center'>{item.title}</p>
                          <p onClick={()=>deleteShow(item.id)} className='absolute text-gray-300 top-4 right-0'><AiOutlineClose></AiOutlineClose></p>
                          </div>
                      </div>
                  )}
              </div>
              <MdChevronRight onClick={slideRight} className='bg-white group-hover:block cursor-pointer right-0 z-[100]  rounded-full absolute opacity-50 hidden  hover:opacity-100 text-gray-400' size={35} />
          </div>

      </>
  )
}

export default SavedShows