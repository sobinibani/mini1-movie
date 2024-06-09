import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../../components/MovieCard';
import Banner from '../../components/Banner';

const MainPage = () => {
    const [movieData, setMovieData] = useState([]);
    const [randomData, setRandomData] = useState([]);

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
                
                const filteredArray = response.data.results.filter((movie)=>{
                    return movie.overview !== ""
                });
                const randomMovie = filteredArray[
                Math.floor(Math.random() * response.data.results.length)]
                setRandomData(randomMovie);
                
            } catch(error){
                console.log(error)
            }
        };

        fetchPopularMovies();
    }, [])

    return (
        <div className='main-page'>  
            <Banner randomMovie={randomData}/>
            <MovieCard movieData={movieData}/> 
        </div>
    )
}

export default MainPage