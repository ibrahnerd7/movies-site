import { POPULAR } from "../constants";

export const requestPopular=(popularType)=>({
    type:POPULAR.LOAD,
    popularType,
});

export const requestPopularSuccess=popular=>({
    type:POPULAR.LOAD_SUCCESS,
    popular,
});

export const requestPopularError=()=>({
    type:POPULAR.LOAD_FAIL,
});
