import { POPULAR_MOVIES, RANDOM_MOVIES, SEARCH_MOVIES } from "./action";

const initialState = {
    popularMovies: [],
    randomMovies: [],
    searchMovies: []
};

const movieReducer = (state= initialState, action) => {
    switch (action.type){
        case POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: action.payload
            }
        case RANDOM_MOVIES:
            return {
                ...state,
                randomMovies: action.payload
            }
        case SEARCH_MOVIES:
            return {
                ...state,
                searchMovies: action.payload
            }
        default:
            return state;
    }
}

export default movieReducer;