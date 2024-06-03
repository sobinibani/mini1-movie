import movieListData from '../../data/movieListData.json'
import MovieCard from '../../components/MovieCard';

const MainPage = () => {
    const movieData = movieListData.results;
    console.log(movieData)

    return (
        <div>
            <MovieCard movieData={movieData}/> 
        </div>

    )
}

export default MainPage
