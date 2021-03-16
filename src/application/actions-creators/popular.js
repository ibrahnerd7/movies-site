import { POPULAR } from "../constants";

export const requestPopular=()=>({
    type:POPULAR.LOAD,
});

export const requestPopularSuccess=popular=>({
    type:POPULAR.LOAD_SUCCESS,
    popular,
});

export const requestPopularError=()=>({
    type:POPULAR.LOAD_FAIL,
});
