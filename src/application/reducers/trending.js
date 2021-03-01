import { TRENDING } from "../constants";

const trendingReducer = (state = {}, action) => {
    switch (action.type) {
        case TRENDING.LOAD:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    trending: null,
                    error: false,
                },
            };
        case TRENDING.LOAD_SUCCESS:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    trending: action.downloads,
                    error: false,
                },
            };
        case TRENDING.LOAD_FAIL:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    trending: null,
                    error: true,
                },
            };
        default:
            return state;
    }
};

export default trendingReducer;