import React from 'react'
import { useNavigate } from 'react-router-dom'

function MovieCard({movieData}) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`)
  };

  return (
    <div className='MovieCard'>
      <ul className='row'>
        {movieData.map((movie)=>{
            return (
                <li key={movie.id}>
                    <img
                        src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt={movie.title}
                        onClick={()=>{handleClick(movie.id)}}
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
