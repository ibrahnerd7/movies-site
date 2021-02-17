import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllTrending } from '../../infrastructure/services/api/trending';
import { loadTrendingFailure, loadTrendingSuccess, LOAD_TRENDING } from '../actions/trending';

export function* handleTrendingLoad() {
    try {
        const trending = yield call(getAllTrending());
        yield put(loadTrendingSuccess(trending));
    }
    catch (error) {
        yield put(loadTrendingFailure(error.toString()))
    }
}

export default function* watchTrendingLoad() {
    yield takeEvery(LOAD_TRENDING, handleTrendingLoad);
}