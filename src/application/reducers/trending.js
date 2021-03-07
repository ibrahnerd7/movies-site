import { TRENDING } from "../constants";

const initialState = {
    trendings: [],
    loading: false,
    error: false
}

const trendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRENDING.LOAD:
            return {
                trendings: [],
                loading: true,
                error: false,
            };
        case TRENDING.LOAD_SUCCESS:
            return {
                trendings: action.trendings,
                loading: false,
                error: false
            };
        case TRENDING.LOAD_FAIL:
            return {
                trendings: [],
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default trendingReducer;