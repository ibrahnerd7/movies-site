import { call, put, takeEvery } from 'redux-saga/effects';
import { getRecommendationsByMovie } from '../../infrastructure/services/api/recommendations';
import {requestRecommendationsSuccess, requestRecommendationsError } from '../actions-creators/recommendations';
import { RECOMMENDATIONS } from '../constants';

export function* handleRecommendationsLoad(action) {
    try {
        const movie = yield call(getRecommendationsByMovie, action.movieId);
        yield put(requestRecommendationsSuccess(movie));
    }
    catch (error) {
        yield put(requestRecommendationsError())
    }

}

export default function* watchRecommendationsLoad() {
    yield takeEvery(RECOMMENDATIONS.LOAD,handleRecommendationsLoad);
}