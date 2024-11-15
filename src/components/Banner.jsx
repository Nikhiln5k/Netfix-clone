import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';


function Banner({fetchURL}) {
    /* console.log(fetchURL); */
    const [movie , setMovie]= useState()
    const base_url = "https://image.tmdb.org/t/p/original/"

     const fetchData = async ()=>{
        const {data} = await instance.get(fetchURL)
        setMovie(data.results[Math.floor(Math.random()*data.results.length)])
        /* console.log(response); */

    }
    console.log(movie);
    useEffect(()=>{
        fetchData()
        const interval = setInterval(() => {
          fetchData();
        }, 5000);
    
        return () => clearInterval(interval); 
    },[])
     
  return (
    <div className='banner' style={{height:'600px',backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundSize:'cover' ,backgroundAttachment:'fixed'}}>
        <div className='d-flex align-items-end' style={{width:"100%",height:"600px",background: "linear-gradient(to top, rgba(0, 0, 0), transparent)"}}>
            <div className='banner-content bg-transparent'>
              <h1 className='bg-transparent mb-4'>{movie?.name}</h1>
              <div className='d-flex bg-transparent mb-2'>
                <button className='btn btn-danger me-3'>Play<i class="fa-solid fa-play"></i></button>
                <button className='btn btn-outline-light'>More info<i class="fa-solid fa-caret-down"></i></button>
              </div>
              <h2 className='bg-transparent'>{movie?.overview?.slice(0,200)}....</h2>
            </div>
        </div>
    </div>
  )
}

export default Banner