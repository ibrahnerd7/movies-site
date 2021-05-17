import { RECOMMENDATIONS } from "../../constants"
import * as actions from '../recommendations'

describe('Recommendations actions', () => {
    test('should create an action to request recommendations', () => {
        const expectedAction={
            type:RECOMMENDATIONS.LOAD,
        }
        expect(actions.requestRecommendations()).toEqual(expectedAction);
    });
    test('should create an action  for successful recommendations fetch', () => {
        const recommendations=['one','two'];
        const expectedAction={
            type: RECOMMENDATIONS.LOAD_SUCCESS,
            recommendations
        }
        expect(actions.requestRecommendationsSuccess(recommendations)).toEqual(expectedAction);
    });
    test('should create an action  for failed recommendations fetch', () => {
        const expectedAction={
            type: RECOMMENDATIONS.LOAD_FAIL
        }
        expect(actions.requestRecommendationsError()).toEqual(expectedAction);
    })
})
