import { call, put, takeEvery } from 'redux-saga/effects';
import { getPopularByType } from '../../infrastructure/services/popular/popular';
import { requestShowsError, requestShowsSuccess } from '../actions-creators/shows';
import { SHOWS } from '../constants';

export function* handleShowsLoad(action) {
    try {
        const shows = yield call(getPopularByType, action.showType);
        yield put(requestShowsSuccess(shows));
    }
    catch (error) {
        yield put(requestShowsError())
    }

}

export default function* watchShowsLoad() {
    yield takeEvery(SHOWS.LOAD, handleShowsLoad);
}