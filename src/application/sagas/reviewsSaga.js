import { call, put, takeEvery } from 'redux-saga/effects';
import { getReviewsByMovie } from '../../infrastructure/services/api/reviews';
import {requestReviewsError, requestReviewsSuccess } from '../actions-creators/reviews';
import { REVIEWS } from '../constants';

export function* handleReviewsLoad(action) {
    try {
        const movie = yield call(getReviewsByMovie, action.movieId);
        yield put(requestReviewsSuccess(movie));
    }
    catch (error) {
        yield put(requestReviewsError())
    }

}

export default function* watchReviewsLoad() {
    yield takeEvery(REVIEWS.LOAD,handleReviewsLoad);
}