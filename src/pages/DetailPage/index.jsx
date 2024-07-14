import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieDetail from "../../components/MovieDetail"
import {useFetchDetailMovies} from "../../hooks/useFetchMovies";

const DetailPage = () => {
    const {id} = useParams();
    useFetchDetailMovies(id);
    const detailMovie = useSelector(state => state.movies.detailMovies);

    return (
        <MovieDetail detailMovie={detailMovie}/>
    )
}

export default DetailPage
