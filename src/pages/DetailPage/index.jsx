import movieDetailData from '../../data/movieDetailData.json'
import './DetailPage.scss'

const MovieDetail = () => {
    console.log(movieDetailData)
    return (
        <div className='MovieDetail'>
            <img
                src={`http://image.tmdb.org/t/p/original/${movieDetailData.backdrop_path}`}
            />
            <h2>{movieDetailData.title}</h2>
            <p className='movie-average'><span>평점</span>{movieDetailData.vote_average}점</p>
            <ul className='movie-genres'>
                {movieDetailData.genres.map((genres)=>{
                    return <li>{genres.name}</li>
                })}
            </ul>
            <p>{movieDetailData.overview}</p>
        </div>
    )
}

export default MovieDetail
