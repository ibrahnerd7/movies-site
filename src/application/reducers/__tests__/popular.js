import popularReducer from '../popular';
import * as actions from '../../actions-creators/popular';

describe('Popular reducer', () => {
    test('should return the initial state', () => {
        expect(popularReducer(undefined, {})).toEqual({
            popular: [],
            loading: false,
            error: false
        })
    })
    test('should handle request popular', () => {
        expect(popularReducer({}, actions.requestPopular())).toEqual({
            popular: [],
            loading: true,
            error: false
        })
    })
    test('should handle request popular success', () => {
        const popular = ['one','two'];
        expect(popularReducer({}, actions.requestPopularSuccess(popular))).toEqual({
            popular: popular,
            loading: false,
            error: false
        })
    })
    test('should handle request popular error', () => {
        expect(popularReducer({}, actions.requestPopularError())).toEqual({
            popular: [],
            loading: false,
            error: true
        })
    })


})