import { LOAD_TRENDING, LOAD_TRENDING_FAILURE, LOAD_TRENDING_SUCCESS } from "../actions/trending";

const initialState = {
    allTrending: [],
    error: null,
    isLoading:true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TRENDING:
            return {...initialState,isLoading:true}
        case LOAD_TRENDING_SUCCESS:
            return { allTodos: action.payload, error: null,isLoading:false };
        case LOAD_TRENDING_FAILURE:
            return { error: action.payload, isLoading:false};
        default:
            return state;
    }
}

export default reducer;