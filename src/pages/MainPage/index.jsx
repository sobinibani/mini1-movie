import { useEffect, useState } from 'react';
import movieListData from '../../data/movieListData.json'
import MovieCard from '../../components/MovieCard';

const MainPage = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(()=>{
        const importData = movieListData.results;
        setMovieData(importData);
    }, [])

    return (
        <>
            <MovieCard movieData={movieData}/> 
        </>
    )
}

export default MainPage