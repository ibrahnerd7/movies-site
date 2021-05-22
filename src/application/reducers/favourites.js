import { FAVOURITES } from "../constants";

const initialState = {
    favourites: [],
    loading: false,
    error: false
}

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVOURITES.LOAD:
            return {
                favourites: [],
                loading: true,
                error: false,
            };
        case FAVOURITES.LOAD_SUCCESS:
            return {
                favourites: action.favourites,
                loading: false,
                error: false
            };
        case FAVOURITES.LOAD_FAIL:
            return {
                favourites: [],
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default favouritesReducer;