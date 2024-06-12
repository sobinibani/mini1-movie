import { useLocation} from "react-router-dom" 
import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import MovieCard from "../../components/MovieCard";

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);

    // 
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const debouncedSearchTerm = useDebounce(query.get('q'), 500);

    // 
    const fetchSearchMovie = async(debouncedSearchTerm) => {
        const apiKey = process.env.REACT_APP_TMDB_API_KEY; 
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${debouncedSearchTerm}`;
      
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

    // 
    useEffect(()=>{
        if(debouncedSearchTerm){
          fetchSearchMovie(debouncedSearchTerm);
        }
    },[debouncedSearchTerm])

    //
    if(searchResults.length > 0){
        return (
            <>
                <MovieCard movieData={searchResults}/>
            </>
        )
    } else {
        return(
            <section className="content-center">
                <p>원하시는 검색 결과가 없습니다.</p>
            </section>
        )
    }

}

export default SearchPage