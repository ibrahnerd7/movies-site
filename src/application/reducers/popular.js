import { POPULAR } from "../constants";

const initialState = {
    popular: [],
    loading: false,
    error: false
}

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR.LOAD:
            return {
                popular: [],
                loading: true,
                error: false,
            };
        case POPULAR.LOAD_SUCCESS:
            return {
                popular: action.popular,
                loading: false,
                error: false
            };
        case POPULAR.LOAD_FAIL:
            return {
                popular: [],
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default popularReducer;