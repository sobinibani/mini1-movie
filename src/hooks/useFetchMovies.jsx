import { useEffect } from "react";
import tmdbAPI from '../api/tmdbAPI';

import { useDispatch } from 'react-redux';
import {setPopularMovies, setRandomMovies, setSearchMovies, setDetailMovies} from '../redux/movieData/action'

export const useFetchMovies = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchPopularMovies = async ()=>{
            try{
                const response = await tmdbAPI.get('movie/popular');
                dispatch(setPopularMovies(response.data.results));

                // 설명없는 영화 제외
                const filteredArray = response.data.results.filter((movie)=>{
                    return movie.overview !== "" && movie.backdrop_path !== null;
                });
                const randomNumber = Math.floor(Math.random() * filteredArray.length);
                const randomMovie = filteredArray[randomNumber];
                dispatch(setRandomMovies(randomMovie));

            } catch(error){
                console.log(error)
            }
        }

        fetchPopularMovies();
    }, [])
}

export const useFetchSearchMovies = (debouncedSearchTerm) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const apiKey = process.env.REACT_APP_TMDB_API_KEY; 
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${debouncedSearchTerm}`;

        const fetchSearchMovie = async()=> {
            try{
                const response = await tmdbAPI.get(url);
                console.log(response)
                const filteredArray = response.data.results.filter((movie)=>{
                    return movie.backdrop_path !== null
                });
                dispatch(setSearchMovies(filteredArray));
            } catch(error){
                console.log(error)
            }
        }

        fetchSearchMovie();
    }, [debouncedSearchTerm])
}

export const useFetchDetailMovies = (id) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchDetailMovie = async()=> {
            try{
                const response = await tmdbAPI.get(`movie/${id}`);
                dispatch(setDetailMovies(response.data));
            } catch(error){
                console.log(error)
            }
        }

        fetchDetailMovie();
    }, [id])
}

