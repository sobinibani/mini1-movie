import movieListData from '../../data/movieListData.json'
import MovieCard from '../../components/MovieCard';

const MainPage = () => {
    const movieData = movieListData.results;

    return (
        <>
            <MovieCard movieData={movieData}/> 
        </>
    )
}

export default MainPage
