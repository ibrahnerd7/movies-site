import {
    REVIEWS
} from "../constants";

export const requestReviews = (movieId) => ({
    type: REVIEWS.LOAD,
    movieId,
});

export const requestReviewsSuccess = reviews => ({
    type: REVIEWS.LOAD_SUCCESS,
    reviews,
});

export const requestReviewsError = () => ({
    type: REVIEWS.LOAD_FAIL,
});
