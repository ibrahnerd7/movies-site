import searchReducer from '../search';
import * as actions from '../../actions-creators/search';

describe('Search reducer', () => {
    test('should return the initial state', () => {
        expect(searchReducer(undefined, {})).toEqual({
            results: [],
            loading: false,
            error: false
        })
    })
    test('should handle request search', () => {
        expect(searchReducer({}, actions.requestSearch())).toEqual({
            results: [],
            loading: true,
            error: false
        })
    })
    test('should handle request search success', () => {
        const results = ['one','two'];
        expect(searchReducer({}, actions.requestSearchSuccess(results))).toEqual({
            results: results,
            loading: false,
            error: false
        })
    })
    test('should handle request search error', () => {
        expect(searchReducer({}, actions.requestSearchError())).toEqual({
            results: [],
            loading: false,
            error: true
        })
    })


})