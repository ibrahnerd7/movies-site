import { REVIEWS } from "../../constants"
import * as actions from '../reviews'

describe('Reviews actions', () => {
    test('should create an action to request reviews', () => {
        const expectedAction={
            type:REVIEWS.LOAD,
        }
        expect(actions.requestReviews()).toEqual(expectedAction);
    });
    test('should create an action  for successful reviews fetch', () => {
        const reviews=['one','two'];
        const expectedAction={
            type: REVIEWS.LOAD_SUCCESS,
            reviews
        }
        expect(actions.requestReviewsSuccess(reviews)).toEqual(expectedAction);
    });
    test('should create an action  for failed reviews fetch', () => {
        const expectedAction={
            type: REVIEWS.LOAD_FAIL
        }
        expect(actions.requestReviewsError()).toEqual(expectedAction);
    })
})
