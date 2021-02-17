import { LOAD_TRENDING_FAILURE, LOAD_TRENDING_SUCCESS } from "../actions/trending";

const initialState = {
    allTrending: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TRENDING_SUCCESS:
            return { allTodos: action.payload, error: null };
        case LOAD_TRENDING_FAILURE:
            return { error: action.payload, };
        default:
            return state;
    }
}

export default reducer;