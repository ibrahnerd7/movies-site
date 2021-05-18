import peopleReducer from '../people';
import * as actions from '../../actions-creators/people';

describe('People reducer', () => {
    test('should return the initial state', () => {
        expect(peopleReducer(undefined, {})).toEqual({
            people: [],
            loading: false,
            error: false
        })
    })
    test('should handle request people', () => {
        expect(peopleReducer({}, actions.requestPeople())).toEqual({
            people: [],
            loading: true,
            error: false
        })
    })
    test('should handle request people success', () => {
        const people = ['one','two'];
        expect(peopleReducer({}, actions.requestPeopleSuccess(people))).toEqual({
            people: people,
            loading: false,
            error: false
        })
    })
    test('should handle request people error', () => {
        expect(peopleReducer({}, actions.requestPeopleError())).toEqual({
            people: [],
            loading: false,
            error: true
        })
    })


})