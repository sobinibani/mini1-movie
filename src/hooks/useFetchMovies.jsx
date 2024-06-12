import { useEffect } from "react";
import tmdbAPI from '../api/tmdbAPI';

import { useDispatch } from 'react-redux';
import {setPopularMovies, setRandomMovies} from '../redux/movieData/action'

const useFetchMovies = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchPopularMovies = async ()=>{
            try{
                const response = await tmdbAPI.get('movie/popular');
                dispatch(setPopularMovies(response.data.results));

                // 설명없는 영화 제외
                const filteredArray = response.data.results.filter((movie)=>{
                    return movie.overview !== ""
                });
                const randomMovie = 
                filteredArray[Math.floor(Math.random() * response.data.results.length)];
                dispatch(setRandomMovies(randomMovie));

            } catch(error){
                console.log(error)
            }
        }

        fetchPopularMovies();
    }, [])

}

export default useFetchMovies;
