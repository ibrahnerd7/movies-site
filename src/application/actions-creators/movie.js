import {
    MOVIE
} from "../constants";

export const requestMovie = (movieId) => ({
    type: MOVIE.LOAD,
    movieId,
});

export const requestMovieSuccess = movie => ({
    type: MOVIE.LOAD_SUCCESS,
    movie,
});

export const requestMovieError = () => ({
    type: MOVIE.LOAD_FAIL,
});
