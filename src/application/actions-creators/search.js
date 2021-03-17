import { SEARCH } from "../constants";

export const requestSearch=(searchTerm)=>({
    type:SEARCH.LOAD,
    searchTerm
});

export const requestSearchSuccess=results=>({
    type:SEARCH.LOAD_SUCCESS,
    results,
});

export const requestSearchError=()=>({
    type:SEARCH.LOAD_FAIL,
});
