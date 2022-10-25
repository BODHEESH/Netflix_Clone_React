import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/constans'


function Rowpost(props) {
    const[movies,setMovies]=useState([])
    const[urlId,setUrlId]=useState('')
    useEffect(()=>{
     axios.get(props.url).then(response=>{
        // console.log(response.data);
        setMovies(response.data.results)
     }).catch(err=>{
        // alert("NetWork error")
     },[])
    })
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }
    const handleMovie=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data,"lklk");
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Trailor not available');
      }
      
    })
    }
  return (
    <div>
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
      {movies.map((obj)=><img onClick={()=>{handleMovie(obj.id) }}className={props.isSmall ? 'smallPoster':'poster'}src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
      )}
      </div>
      </div>
      { urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default Rowpost
