import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllTrending } from '../../infrastructure/services/api/trending';
import { loadTrending, setTrendingLoadError, setTrendings } from '../actions/trending';
import { TRENDING } from '../constants';

export function* handleTrendingLoad() {
    try {
        yield put(loadTrending('day')) //obtain from redux
        const trending = yield call(getAllTrending());
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