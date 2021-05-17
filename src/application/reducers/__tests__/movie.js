import movieReducer from '../movie';
import * as actions from '../../actions-creators/movie';

describe('Movie reducer', () => {
    test('should return the initial state', () => {
        expect(movieReducer(undefined, {})).toEqual({
            movie: {},
            loading: false,
            error: false
        })
    })
    test('should handle request movie', () => {
        expect(movieReducer({}, actions.requestMovie())).toEqual({
            "error": false,
            "loading": true,
            "movie": {}
        })
    })
    test('should handle request movie success', () => {
        const movie = { id: '1', title: 'Title 1' };
        expect(movieReducer({}, actions.requestMovieSuccess(movie))).toEqual({
            "error": false,
            "loading": false,
            "movie": movie
        })
    })
    test('should handle request movie error', () => {
        expect(movieReducer({}, actions.requestMovieError())).toEqual({
            "error": true,
            "loading": false,
            "movie": {}
        })
    })


})