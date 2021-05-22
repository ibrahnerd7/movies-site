import favouritesReducer from '../favourites';
import * as actions from '../../actions-creators/favourites';

describe('Favourites reducer', () => {
    test('should return the initial state', () => {
        expect(favouritesReducer(undefined, {})).toEqual({
            favourites: [],
            loading: false,
            error: false
        })
    })
    test('should handle request favourites', () => {
        expect(favouritesReducer({}, actions.requestFavourites())).toEqual({
            error: false,
            loading: true,
            favourites: []
        })
    })
    test('should handle request favourites success', () => {
        const favourites =[ { id: '1', title: 'Title 1' }];
        expect(favouritesReducer({}, actions.requestFavouritesSuccess(favourites))).toEqual({
            error: false,
            loading: false,
            favourites: favourites
        })
    })
    test('should handle request favourites error', () => {
        expect(favouritesReducer({}, actions.requestFavouritesError())).toEqual({
            error: true,
            loading: false,
            favourites: []
        })
    })


})