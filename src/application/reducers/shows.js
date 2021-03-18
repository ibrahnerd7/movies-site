import { SHOWS } from "../constants";

const initialState = {
    shows: [],
    loading: false,
    error: false
}

const showsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOWS.LOAD:
            return {
                shows: [],
                loading: true,
                error: false,
            };
        case SHOWS.LOAD_SUCCESS:
            return {
                shows: action.popular,
                loading: false,
                error: false
            };
        case SHOWS.LOAD_FAIL:
            return {
                shows: [],
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default showsReducer;