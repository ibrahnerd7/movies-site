import {
    REVIEWS
} from "../constants";

export const requestReviews = (movieId) => ({
    type: REVIEWS.LOAD,
    movieId,
});

export const requestReviewsSuccess = movie => ({
    type: REVIEWS.LOAD_SUCCESS,
    movie,
});

export const requestReviewsError = () => ({
    type: REVIEWS.LOAD_FAIL,
});
