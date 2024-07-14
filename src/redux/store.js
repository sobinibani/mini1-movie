import { createStore, combineReducers } from 'redux';
import movieReducer from './movieData/reducer';
import loginReducer from './handleLogin/reducer';

const rootReducer = combineReducers({
    movies: movieReducer,
    login: loginReducer
})

const movieStore = createStore(rootReducer);

export default movieStore;