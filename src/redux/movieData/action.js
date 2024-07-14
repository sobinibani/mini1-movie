export const POPULAR_MOVIES = 'POPULAR_MOVIES';
export const RANDOM_MOVIES = 'RANDOM_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const DETAIL_MOVIES = 'DETAIL_MOVIES';

export const setPopularMovies = (movies) => ({
  type: POPULAR_MOVIES,
  payload: movies
});

export const setRandomMovies = (movies) => ({
  type: RANDOM_MOVIES,
  payload: movies
});

export const setSearchMovies = (movies) => ({
  type: SEARCH_MOVIES,
  payload: movies
});

export const setDetailMovies = (movies) => ({
  type: DETAIL_MOVIES,
  payload: movies
});