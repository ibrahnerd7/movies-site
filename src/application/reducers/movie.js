import { MOVIE } from "../constants";

const initialState = {
    movie: [],
    loading: false,
    error: false
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE.LOAD:
            return {
                movie: [],
                loading: true,
                error: false,
            };
        case MOVIE.LOAD_SUCCESS:
            return {
                movie: action.movie,
                loading: false,
                error: false
            };
        case MOVIE.LOAD_FAIL:
            return {
                movie: [],
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default movieReducer;