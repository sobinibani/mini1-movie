import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import MovieCard from "../../components/MovieCard";
import { useFetchSearchMovies } from "../../hooks/useFetchMovies";

const SearchPage = () => {
  const searchResults = useSelector((state) => state.movies.searchMovies);

  //
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const debouncedSearchTerm = useDebounce(query.get("q"), 500);

  useFetchSearchMovies(debouncedSearchTerm);

  //
  if (searchResults.length > 0) {
    return (
      <>
        <MovieCard movieData={searchResults} />
      </>
    );
  } else {
    return (
      <section className="content-center">
        <p>원하시는 검색 결과가 없습니다.</p>
      </section>
    );
  }
};

export default SearchPage;
