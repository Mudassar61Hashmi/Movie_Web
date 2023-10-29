import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from './context';
import { Link } from 'react-router-dom';
const SingleMovie = () => {
  const {id}= useParams();
  const [isLoading, setIsLoading]= useState(true)
  const [movie, setMovie]= useState("");
  
  
  const getmovies=async(url)=>{
    setIsLoading(true)
try{
const res= await fetch(url);
const data= await res.json();
console.log(data)
if(data.Response==="True"){
  setIsLoading(false);
  setMovie(data)
}

}
catch(error){
console.log(error)
}
  }
useEffect(()=>{
  let timeOut=setTimeout(() => {
    getmovies(`${API_URL}&i=${id}`)
  }, 800);
  return ()=>clearTimeout(timeOut)
},[id])

if(isLoading){
  return (
    <div className="movie-section">
      <div className="loading">Loading...</div>
    </div>
  )
}

  return (
   <>
   <section className="movie-section">
    <div className="movie-card">
      <figure>
        <img src={movie.Poster} alt="" />
      </figure>
      <div className="card-content">
        <p className="title">{movie.Title}</p>
        
        <p className="card-text"><strong>Release Date: </strong>{movie.Released}</p>
        <p className="card-text"><strong>Genre: </strong>{movie.Genre}</p>
        <p className="card-text"><strong>Ratings: </strong>{movie.imdbRating}</p>
        <p className="card-text"><strong>Country: </strong>{movie.Country}</p>
        <Link to='/' className='back-btn'>Go Back</Link>
      </div>
    </div>
   </section>
   </>
  )
}

export default SingleMovie
