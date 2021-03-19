import { call, put, takeEvery } from 'redux-saga/effects';
import { getShowsByType } from '../../infrastructure/services/api/shows';
import { requestShowsError, requestShowsSuccess } from '../actions-creators/shows';
import { SHOWS } from '../constants';

export function* handleShowsLoad(action) {
    try {
        const shows = yield call(getShowsByType, action.showType);
        yield put(requestShowsSuccess(shows));
    }
    catch (error) {
        yield put(requestShowsError())
    }

}

export default function* watchShowsLoad() {
    yield takeEvery(SHOWS.LOAD, handleShowsLoad);
}

