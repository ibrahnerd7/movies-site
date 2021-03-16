import { call, put, takeEvery } from 'redux-saga/effects';
import { getPopularByType } from '../../infrastructure/services/popular/popular';
import { requestPopularSuccess } from '../actions-creators/popular';
import { requestTrendingsError } from '../actions-creators/trending';
import { POPULAR } from '../constants';

export function* handlePopularLoad(action) {
    try {
        const popular = yield call(getPopularByType, action.popularType);
        yield put(requestPopularSuccess(popular));
    }
    catch (error) {
        yield put(requestTrendingsError())
    }

}

export default function* watchPopularLoad() {
    yield takeEvery(POPULAR.LOAD, handlePopularLoad);
}