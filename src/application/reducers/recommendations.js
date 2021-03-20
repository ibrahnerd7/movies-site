import { RECOMMENDATIONS } from "../constants";

const initialState = {
    recommendations: [],
    loading: false,
    error: false
}

const recommendationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECOMMENDATIONS.LOAD:
            return {
                recommendations: [],
                loading: true,
                error: false,
            };
        case RECOMMENDATIONS.LOAD_SUCCESS:
            return {
                recommendations: action.popular,
                loading: false,
                error: false
            };
        case RECOMMENDATIONS.LOAD_FAIL:
            return {
                recommendations: [],
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default recommendationsReducer;