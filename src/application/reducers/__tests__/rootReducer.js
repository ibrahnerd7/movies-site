import { createStore } from 'redux'
import rootReducer from '../../reducers'
import movieReducer from '../movie';
import peopleReducer from '../people';

test('root reducer combines all reducers',()=>{
    let store=createStore(rootReducer);
    expect(store.getState().movie).toEqual(movieReducer(undefined,{
        movie: {},
        loading: false,
        error: false
    }))
    expect(store.getState().people).toEqual(peopleReducer(undefined,{
        people: [],
        loading: false,
        error: false
    }))
})