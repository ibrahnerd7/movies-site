import { call, put, takeEvery } from 'redux-saga/effects';
import { getTrendingByTimeWindow } from '../../infrastructure/services/api/trending';
import { loadTrending, setTrendingLoadError, setTrendings } from '../actions/trending';
import { TRENDING } from '../constants';

export function* handleTrendingLoad() {
    const timeWindow="day";
    try {
        yield put(loadTrending(timeWindow)) //obtain from redux
        const trending = yield call(getTrendingByTimeWindow(timeWindow));
        console.log(trending)
        yield put(setTrendings(trending));
    }
    catch (error) {
        yield put(setTrendingLoadError(error.toString()))
    }
}

export default function* watchTrendingLoad() {
    yield takeEvery(TRENDING.LOAD, handleTrendingLoad);
}