import React, { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './MovieCard';
// ecd1fd7b 
const Api_Url = 'http://www.omdbapi.com?apikey=ecd1fd7b';

const movie1 = {
  "Title": "Spiderman",
  "Year": "2010",
  "imdbID": "tt1785572",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {

  const [movies, Setmovies] = useState();
  const [SearchTerm, SetSearchTerm] = useState('');

  const SearchMovie = async (title) => {
    const response = await fetch(`${Api_Url}&s=${title}`);
    const data = await response.json();
    Setmovies(data.Search);

  }


  useEffect(() => {
    SearchMovie('Spiderman')

  }, []);



  return (
    <>
      <div className="body">
        <div className="container-fluid">
          <h1 className='heading text-center'>
            MovieLand
          </h1>
          <div className="search">
            <input className="form-control" placeholder="Search For Movie" value={SearchTerm} onChange={(e) => SetSearchTerm(e.target.value)} />
            <i className="bi bi-search" onClick={() => SearchMovie(SearchTerm)}></i>
          </div>

          <div className="container">
          <div className="row">
            {movies?.length > 0 ? (
              movies.map((movie) => (
                <div key={movie.imdbID} className='col-12 col-md-4 col-lg-4 mt-5 mb-3'>
                  <MovieCard movie={movie} />
                </div>
              ))
            ) : (
              <div className='empty'>
                <h1>Movie not found</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App