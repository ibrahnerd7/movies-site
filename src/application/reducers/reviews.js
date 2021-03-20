import { REVIEWS } from "../constants";

const initialState = {
    reviews: [],
    loading: false,
    error: false
}

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REVIEWS.LOAD:
            return {
                reviews: [],
                loading: true,
                error: false,
            };
        case REVIEWS.LOAD_SUCCESS:
            return {
                reviews: action.reviews,
                loading: false,
                error: false
            };
        case REVIEWS.LOAD_FAIL:
            return {
                reviews: [],
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default reviewsReducer;