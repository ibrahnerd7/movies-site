import { TRENDING } from "../constants";

export const loadTrending=(timeWindow)=>({
    type:TRENDING.LOAD,
    timeWindow
});

export const setTrendings=trending=>({
    type:TRENDING.LOAD_SUCCESS,
    trending,
});

export const setTrendingLoadError=(error)=>({
    type:TRENDING.LOAD_FAIL,
    error
});
