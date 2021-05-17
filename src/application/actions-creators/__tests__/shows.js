import { SHOWS } from "../../constants"
import * as actions from '../shows'

describe('Shows actions', () => {
    test('should create an action to request shows', () => {
        const expectedAction={
            type:SHOWS.LOAD,
        }
        expect(actions.requestShows()).toEqual(expectedAction);
    });
    test('should create an action  for successful shows fetch', () => {
        const shows=['one','two'];
        const expectedAction={
            type: SHOWS.LOAD_SUCCESS,
            shows
        }
        expect(actions.requestShowsSuccess(shows)).toEqual(expectedAction);
    });
    test('should create an action  for failed shows fetch', () => {
        const expectedAction={
            type: SHOWS.LOAD_FAIL
        }
        expect(actions.requestShowsError()).toEqual(expectedAction);
    })
})
