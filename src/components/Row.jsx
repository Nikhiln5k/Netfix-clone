import React, { useEffect, useState } from 'react'
import instance from '../instance'
import { all } from 'axios'
import './Row.css';

function Row({title,fetchURL,isPoster}) {
  const [allMovies, setAllMovies] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/";
/*     console.log(fetchURL);  */
    const fetchData = async ()=>{
       const {data} = await instance.get(fetchURL)
      /*  console.log(data.results); */
      setAllMovies(data.results)
    }
   /*  console.log(allMovies); */

  useEffect(()=>{
      fetchData()
  },[])
  return (
    <div className='row mt-4 w-100'>
        <h1>{title}</h1>
        <div className="movie_row w-100">
          {
            allMovies?.map(item=>(
              <img className={`movies ${isPoster && 'movie-poster'}`} src={`${base_url}/${isPoster?item?.poster_path:item?.backdrop_path}`} alt="no image" />
            ))
          }
        </div>
    </div>
  )
}

export default Row;