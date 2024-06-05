import React from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = ({randomMovie}) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
      navigate(`/movie/${id}`)
    };

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n) + '...' : str
    }

    return (
        <div className="banner" style={{ backgroundImage: `url(http://image.tmdb.org/t/p/original/${randomMovie.backdrop_path})` }}>
            <div className='inner'>
                <h2 className='banner-title'>{randomMovie.title}</h2>
                <p className='banner-overview'>
                    {truncate(randomMovie.overview, 300)}
                </p>
                <button
                    className='view-more'
                    onClick={()=>{handleClick(randomMovie.id)}}
                >자세히 보기</button>
            </div>
            <div className='fade-bottom'/>
        </div>
    )
}

export default Banner
