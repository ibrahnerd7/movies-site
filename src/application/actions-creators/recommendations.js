import {
    RECOMMENDATIONS
} from "../constants";

export const requestRecommendations = (movieId) => ({
    type: RECOMMENDATIONS.LOAD,
    movieId,
});

export const requestRecommendationsSuccess = recommendations => ({
    type: RECOMMENDATIONS.LOAD_SUCCESS,
    recommendations,
});

export const requestRecommendationsError = () => ({
    type: RECOMMENDATIONS.LOAD_FAIL,
});
