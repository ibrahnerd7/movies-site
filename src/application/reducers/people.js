import { PEOPLE } from "../constants";

const initialState = {
    people: [],
    loading: false,
    error: false
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case PEOPLE.LOAD:
            return {
                people: [],
                loading: true,
                error: false,
            };
        case PEOPLE.LOAD_SUCCESS:
            return {
                people: action.people,
                loading: false,
                error: false
            };
        case PEOPLE.LOAD_FAIL:
            return {
                people: [],
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default peopleReducer;