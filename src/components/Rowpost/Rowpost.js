import React,{useEffect, useState} from 'react'
import money from './moneyheist.png'
import './Rowpost.css'
import axios from 'axios'
import { API_KEY, imageUrl} from '../../constants/constants'
import YouTube from 'react-youtube'

function Rowpost(props) {
  const [movies,setMovies]=useState([])
  const[id, setId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(Response=>
    {
      console.log(Response.data)
      setMovies(Response.data.results)
    }).catch(err=>{
      alert('network error')
    })

  },[])
  const opts = {
    height: '390',
    width: '600px',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handlemovie= (id)=>{
    console.log(id)
    axios.get(`https://api.themoviedb.org/3//movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
      console.log(Response.data.results)
      if (Response.data.results.length!=0){
        setId(Response.data.results[0])
      }
      else{
        console.log('trailer not available')
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
          <img onClick={()=> handlemovie(obj.id)} className={props.isSmall? 'smallposter':'poster' }src= {obj ? `${imageUrl+obj.backdrop_path}` : ''}   ></img>
        
        )}
        
        
      </div>
     {id && <YouTube videoId={id.key} opts={opts}   />}
      
  
    </div>
  )
}

export default Rowpost
