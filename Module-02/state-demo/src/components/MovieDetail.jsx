import React, { useState } from 'react'

function MovieDetail() {

    const [movie, setMovie] = useState({title: "Super man", rating: 8})
    const hanldeRatingChange = () =>{
        // setMovie({title: "Super man", rating: 9})
        // setMovie({title: movie.title, rating: 9})

        // Spread operator (...) - Copy the state variable movie
        // const movieCopy = {...movie}
        // movieCopy.rating = 9
        // setMovie(movieCopy)

        // Modity the rating while copy from state variable
        // const movieCopy = {...movie, rating: 9}        
        // setMovie(movieCopy)

        // Copy and change the rating property in setMovie function itself
        setMovie({...movie, rating: 9})
    }
  return (
    <div>
        <h1>State using Object</h1>
        <h3>Movie Title: {movie.title}</h3>
        <h3>Movie Rating: {movie.rating}</h3>
        <button onClick={hanldeRatingChange}>Change Movie Rating</button>
    </div>
  )
}

export default MovieDetail