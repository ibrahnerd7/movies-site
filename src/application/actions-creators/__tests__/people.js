import { PEOPLE } from "../../constants"
import * as actions from '../people'

describe('People actions', () => {
    test('should create an action to request people', () => {
        const expectedAction={
            type:PEOPLE.LOAD,
        }
        expect(actions.requestPeople()).toEqual(expectedAction);
    });
    test('should create an action  for successful people fetch', () => {
        const people=['one','two'];
        const expectedAction={
            type: PEOPLE.LOAD_SUCCESS,
            people
        }
        expect(actions.requestPeopleSuccess(people)).toEqual(expectedAction);
    });
    test('should create an action  for failed people fetch', () => {
        const expectedAction={
            type: PEOPLE.LOAD_FAIL
        }
        expect(actions.requestPeopleError()).toEqual(expectedAction);
    })
})
