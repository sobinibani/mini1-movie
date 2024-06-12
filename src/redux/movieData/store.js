import { createStore, combineReducers } from 'redux';
import movieReducer from './reducer';

const rootReducer = combineReducers({
    movies: movieReducer
})

const movieStore = createStore(rootReducer);

export default movieStore;