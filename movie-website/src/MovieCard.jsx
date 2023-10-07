import React from 'react'


const MovieCard = ({ movie }) => {
  return (
    <>
   
     <div className="movie">
       

       <div>
      
           
       <div className='movie-Year'>{movie.Year}</div>
         <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
       </div>

       <div className='darkk'>
         <span>{movie.Type}</span>
         <h3>{movie.Title}</h3>
       </div>

     </div>
    </>
  )
}

export default MovieCard;