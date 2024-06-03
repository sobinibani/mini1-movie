import React from 'react'
import './styles/MovieCard.scss'

function MovieCard({movieData}) {
  return (
    <div className='MovieCard'>
      <ul className='row'>
        {movieData.map((movie)=>{
            return (
                <li>
                    <img
                        src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt={movie.title}
                        onClick={()=>{window.location.href = '/detail'}}
                    />
                    <p className='movie-title'>{movie.title}</p>
                    <p className='movie-average'>
                      <span>평점</span>
                      {movie.vote_average}점
                    </p>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default MovieCard
