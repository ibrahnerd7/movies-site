import trendingReducer from '../trending';
import * as actions from '../../actions-creators/trending';

describe('Trending reducer', () => {
    test('should return the initial state', () => {
        expect(trendingReducer(undefined, {})).toEqual({
            trendings: [],
            loading: false,
            error: false
        })
    })
    test('should handle request trendings', () => {
        expect(trendingReducer({}, actions.requestTrendings())).toEqual({
            trendings: [],
            loading: true,
            error: false
        })
    })
    test('should handle request trendings success', () => {
        const trendings = ['one','two'];
        expect(trendingReducer({}, actions.requestTrendingsSuccess(trendings))).toEqual({
            trendings:trendings ,
            loading: false,
            error: false
        })
    })
    test('should handle request trendings error', () => {
        expect(trendingReducer({}, actions.requestTrendingsError())).toEqual({
            trendings: [] ,
            loading: false,
            error: true
        })
    })


})