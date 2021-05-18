import recommendationsReducer from '../recommendations';
import * as actions from '../../actions-creators/recommendations';

describe('Recommedations reducer', () => {
    test('should return the initial state', () => {
        expect(recommendationsReducer(undefined, {})).toEqual({
            recommendations: [],
            loading: false,
            error: false
        })
    })
    test('should handle request recommendations', () => {
        expect(recommendationsReducer({}, actions.requestRecommendations())).toEqual({
            recommendations: [],
            loading: true,
            error: false
        })
    })
    test('should handle request recommendations success', () => {
        const recommendations = ['one','two'];
        expect(recommendationsReducer({}, actions.requestRecommendationsSuccess(recommendations))).toEqual({
            recommendations: recommendations,
            loading: false,
            error: false
        })
    })
    test('should handle request recommendations error', () => {
        expect(recommendationsReducer({}, actions.requestRecommendationsError())).toEqual({
            recommendations: [],
            loading: false,
            error: true
        })
    })


})