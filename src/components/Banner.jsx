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
    },[])
     
  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundSize:'cover' ,backgroundAttachment:'fixed'}}>
        <div className='banner-content'>
            <h1>{movie?.name}</h1>
            <button className='btn btn-danger me-3'>Play<i class="fa-solid fa-play"></i></button>
            <button className='btn btn-outline-light'>More info<i class="fa-solid fa-caret-down"></i></button>
            <h2>{movie?.overview?.slice(0,200)}....</h2>
        </div>
    </div>
  )
}

export default Banner