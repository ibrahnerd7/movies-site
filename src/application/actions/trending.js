export const LOAD_TRENDING='[trending] load';
export const LOAD_TRENDING_SUCCESS='[todos] load success';
export const LOAD_TRENDING_FAILURE='[trending] load failure';


export const loadTrending=()=>({
    type:LOAD_TRENDING,
});

export const loadTrendingSuccess=trending=>({
    type:LOAD_TRENDING_SUCCESS,
    payload:trending,
});

export const loadTrendingFailure=(error)=>({
    type:LOAD_TRENDING_FAILURE,
    payload:error,
});
