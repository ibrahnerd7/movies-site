import { MOVIE } from "../../constants"
import * as actions from '../movie'

describe('Movie actions', () => {
    test('should create an action to request movie', () => {
        const expectedAction={
            type:MOVIE.LOAD,
        }
        expect(actions.requestMovie()).toEqual(expectedAction);
    });
    test('should create an action  for successful movie fetch', () => {
        const movie={id:'1',title:'Title 1'};
        const expectedAction={
            type: MOVIE.LOAD_SUCCESS,
            movie
        }
        expect(actions.requestMovieSuccess(movie)).toEqual(expectedAction);
    });
    test('should create an action  for failed movie fetch', () => {
        const expectedAction={
            type: MOVIE.LOAD_FAIL
        }
        expect(actions.requestMovieError()).toEqual(expectedAction);
    })
})
