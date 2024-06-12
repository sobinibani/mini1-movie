import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard';
import Banner from '../../components/Banner';

const MainPage = () => {
    // const test = useSelector(state => state.movies);
    // console.log(test);
    const movieData = useSelector(state => state.movies.popularMovies);
    const randomData = useSelector(state => state.movies.randomMovies);

    return (
        <div className='main-page'>  
            <Banner randomMovie={randomData}/>
            <MovieCard movieData={movieData}/> 
        </div>
    )
}

export default MainPage