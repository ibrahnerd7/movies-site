import { SEARCH } from "../constants";

export const requestTrendings=(searchTerm)=>({
    type:SEARCH.LOAD,
    searchTerm
});

export const requestTrendingsSuccess=results=>({
    type:SEARCH.LOAD_SUCCESS,
    results,
});

export const requestTrendingsError=()=>({
    type:SEARCH.LOAD_FAIL,
});
