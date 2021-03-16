import { POPULAR } from "../../constants"
import * as actions from '../popular'

describe('Popular actions', () => {
    test('should create an action to request popular', () => {
        const expectedAction={
            type:POPULAR.LOAD,
        }
        expect(actions.requestPopular()).toEqual(expectedAction);
    });
    test('should create an action to for successful popular fetch', () => {
        const popular=['one','two'];
        const expectedAction={
            type:POPULAR.LOAD_SUCCESS,
            popular
        }
        expect(actions.requestPopularSuccess(popular)).toEqual(expectedAction);
    });
    test('should create an action to for failed popular fetch', () => {
        const expectedAction={
            type:POPULAR.LOAD_FAIL
        }
        expect(actions.requestPopularError()).toEqual(expectedAction);
    })
})
