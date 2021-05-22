import { FAVOURITES } from "../../constants"
import * as actions from '../favourites'

describe('Movie actions', () => {
    test('should create an action to request favourites', () => {
        const expectedAction={
            type:FAVOURITES.LOAD,
        }
        expect(actions.requestFavourites()).toEqual(expectedAction);
    });
    test('should create an action  for successful favourites fetch', () => {
        const favourites={id:'1',title:'Title 1'};
        const expectedAction={
            type: FAVOURITES.LOAD_SUCCESS,
            favourites
        }
        expect(actions.requestFavouritesSuccess(favourites)).toEqual(expectedAction);
    });
    test('should create an action  for failed favourites fetch', () => {
        const expectedAction={
            type: FAVOURITES.LOAD_FAIL
        }
        expect(actions.requestFavouritesError()).toEqual(expectedAction);
    })
})
