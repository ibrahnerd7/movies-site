import { TRENDING } from "../constants";

export const requestTrendings=(timeWindow)=>({
    type:TRENDING.LOAD,
    timeWindow
});

export const requestTrendingsSuccess=trendings=>({
    type:TRENDING.LOAD_SUCCESS,
    trendings,
});

export const requestTrendingsError=()=>({
    type:TRENDING.LOAD_FAIL,
});
