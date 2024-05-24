import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'



function Banner() {
  const m =(Math.random()*50)+1
  const [movie, setMovie]= useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
        console.log(Response.data)
        setMovie(Response.data.results[0])
    }
    )
      
  },[])
  return (
  
    <div 
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : " "})`}} 
     className='banner'>
      <div className='content'>
      <h1 className='title'>{movie ? movie.title: ""}</h1>
      <div className='banner-buttons'>
          <button className='button'>PLAY</button>
          <button className='button'>MY LIST</button>
      </div>
      <h1 className='description'> {movie ? movie.overview:" " }</h1>
     
      
    </div>
    <div className='fadebottom'></div>
    
    </div>
  )
}

export default Banner
