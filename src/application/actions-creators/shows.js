import { SHOWS } from "../constants";

export const requestShows=(showType)=>({
    type:SHOWS.LOAD,
    showType,
});

export const requestShowsSuccess=shows=>({
    type:SHOWS.LOAD_SUCCESS,
    shows,
});

export const requestShowsError=()=>({
    type:SHOWS.LOAD_FAIL,
});
