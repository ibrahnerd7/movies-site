import { SEARCH } from "../constants";

const initialState = {
    results: [],
    loading: false,
    error: false
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH.LOAD:
            return {
                results: [],
                loading: true,
                error: false,
            };
        case SEARCH.LOAD_SUCCESS:
            return {
                results: action.results,
                loading: false,
                error: false
            };
        case SEARCH.LOAD_FAIL:
            return {
                results: [],
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default searchReducer;