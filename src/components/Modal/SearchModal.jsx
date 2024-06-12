import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { GrPrevious } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import MovieCard from '../MovieCard';

const SearchModal = ({setSearchModal}) => {
const [searchValue, setSearchValue] = useState('');
const [searchResults, setSearchResults] = useState([]);

const fetchSearchMovie = async(searchValue) => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY; 
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`;
  
    try{
        const response = await axios.get(url, {
            params: {
                language: "ko-KR"
            }
        });

        console.log(response.data.results)
        const filteredArray = response.data.results.filter((movie)=>{
            return movie.backdrop_path !== null
        });
        setSearchResults(filteredArray);

    }catch(error){
        console.log('error', error);
    }
}

useEffect(()=>{
    fetchSearchMovie(searchValue)
},[searchValue])

  return (
    <div className='SearchModal'>
            <div className='searchWrapper'>
                <div className='inner'>
                    <GrPrevious onClick={()=>{setSearchModal(false)}}/>
                    <div className='searchInput'>
                        <input
                            type='text'
                            placeholder='어떤 영화를 찾으세요?'
                            value={searchValue}
                            onChange={(e)=>{setSearchValue(e.target.value)}}
                        />
                        <CiSearch className='searchIcon'/>
                    </div>
                </div>
            </div>

            <div className='mt30 searchResults'>
                <MovieCard movieData={searchResults}/>
            </div>
    </div>
  )
}

export default SearchModal
