import { TRENDING } from "../../constants"
import * as actions from '../trending'

describe('Trending actions', () => {
    test('should create an action to request trendings', () => {
        const expectedAction={
            type:TRENDING.LOAD,
        }
        expect(actions.requestTrendings()).toEqual(expectedAction);
    });
    test('should create an action to for successful trendings fetch', () => {
        const trendings=['one','two'];
        const expectedAction={
            type:TRENDING.LOAD_SUCCESS,
            trendings
        }
        expect(actions.requestTrendingsSuccess(trendings)).toEqual(expectedAction);
    });
    test('should create an action to for failed trendings fetch', () => {
        const expectedAction={
            type:TRENDING.LOAD_FAIL
        }
        expect(actions.requestTrendingsError()).toEqual(expectedAction);
    })
})
