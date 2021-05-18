import reviewsReducer from '../reviews';
import * as actions from '../../actions-creators/reviews';

describe('Reviews reducer', () => {
    test('should return the initial state', () => {
        expect(reviewsReducer(undefined, {})).toEqual({
            reviews: [],
            loading: false,
            error: false
        })
    })
    test('should handle request reviews', () => {
        expect(reviewsReducer({}, actions.requestReviews())).toEqual({
            reviews: [],
            loading: true,
            error: false
        })
    })
    test('should handle request reviews success', () => {
        const reviews = ['one','two'];
        expect(reviewsReducer({}, actions.requestReviewsSuccess(reviews))).toEqual({
            reviews: reviews,
            loading: false,
            error: false
        })
    })
    test('should handle request reviews error', () => {
        expect(reviewsReducer({}, actions.requestReviewsError())).toEqual({
            reviews: [],
            loading: false,
            error: true
        })
    })


})