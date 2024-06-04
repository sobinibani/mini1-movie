import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from "../../components/MovieDetail"

const DetailPage = () => {
    const {id} = useParams();

    const [detailMovie, setDetailMovie] = useState();

    useEffect(()=>{
        const fetchDetailMovie = async () => {
            try{
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
                    params: {
                        api_key: process.env.REACT_APP_TMDB_API_KEY,
                        language: "ko-KR"
                    }
                });
                setDetailMovie(response.data);
            } catch(error){
                console.log(error)
            }
        };

        fetchDetailMovie();
    }, [id])
    return (
        <>
          <MovieDetail detailMovie={detailMovie}/>
        </>
    )
}

export default DetailPage
