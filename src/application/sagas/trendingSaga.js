import { call, put, takeEvery } from 'redux-saga/effects';
import { getTrendingByTimeWindow } from '../../infrastructure/services/api/trending';
import {requestTrendingsError, requestTrendingsSuccess } from '../actions-creators/trending';
import { TRENDING } from '../constants';

export function* handleTrendingLoad(action) {
    try {
        const trending = yield call(getTrendingByTimeWindow,action.timeWindow);
        yield put(requestTrendingsSuccess(trending));
    }
    catch (error) {
        yield put(requestTrendingsError())
    }

}

export default function* watchTrendingLoad() {
        yield takeEvery(TRENDING.LOAD, handleTrendingLoad);
}