import { call, put, takeEvery } from 'redux-saga/effects';
import { getMovieById } from '../../infrastructure/services/api/movies';
import {requestMovieError,requestMovieSuccess } from '../actions-creators/movie';
import { MOVIE } from '../constants';

export function* handleMovieLoad(action) {
    try {
        const movie = yield call(getMovieById, action.movieId);
        yield put(requestMovieSuccess(movie));
    }
    catch (error) {
        yield put(requestMovieError())
    }

}

export default function* watchMovieLoad() {
    yield takeEvery(MOVIE.LOAD,handleMovieLoad);
}