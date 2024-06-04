import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../../components/MovieCard';

const MainPage = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(()=>{
        const fetchPopularMovies = async () => {
            try{
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular',{
                    params: {
                        api_key: process.env.REACT_APP_TMDB_API_KEY,
                        language: "ko-KR"
                    }
                });
                setMovieData(response.data.results);
            } catch(error){
                console.log(error)
            }
        };

        fetchPopularMovies();
    }, [])

    return (
        <>
            <MovieCard movieData={movieData}/> 
        </>
    )
}

export default MainPage