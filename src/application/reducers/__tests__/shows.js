import showsReducer from '../shows';
import * as actions from '../../actions-creators/shows';

describe('Shows reducer', () => {
    test('should return the initial state', () => {
        expect(showsReducer(undefined, {})).toEqual({
            shows: [],
            loading: false,
            error: false
        })
    })
    test('should handle request search', () => {
        expect(showsReducer({}, actions.requestShows())).toEqual({
            shows: [],
            loading: true,
            error: false
        })
    })
    test('should handle request search success', () => {
        const shows = ['one','two'];
        expect(showsReducer({}, actions.requestShowsSuccess(shows))).toEqual({
            shows: shows,
            loading: false,
            error: false
        })
    })
    test('should handle request search error', () => {
        expect(showsReducer({}, actions.requestShowsError())).toEqual({
            shows: [],
            loading: false,
            error: true
        })
    })


})