import { SEARCH } from "../../constants"
import * as actions from '../search'

describe('Search actions', () => {
    test('should create an action to request search', () => {
        const expectedAction={
            type:SEARCH.LOAD,
        }
        expect(actions.requestSearch()).toEqual(expectedAction);
    });
    test('should create an action to for successful search', () => {
        const results=['one','two'];
        const expectedAction={
            type:SEARCH.LOAD_SUCCESS,
            results
        }
        expect(actions.requestSearchSuccess(results)).toEqual(expectedAction);
    });
    test('should create an action to for failed search', () => {
        const expectedAction={
            type:SEARCH.LOAD_FAIL
        }
        expect(actions.requestSearchError()).toEqual(expectedAction);
    })
})
