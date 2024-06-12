import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

const tmdbAPI = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: apiKey,
        language: "ko-KR"
    }
})

export default tmdbAPI;