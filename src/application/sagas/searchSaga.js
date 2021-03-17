import { call, put, takeEvery } from 'redux-saga/effects';
import { getSearchResults } from '../../infrastructure/services/api/search';
import { requestSearchError, requestSearchSuccess } from '../actions-creators/search';
import { SEARCH, TRENDING } from '../constants';

export function* handleSearchLoad(action) {
    try {
        const searchResults = yield call(getSearchResults,action.searchTerm);
        yield put(requestSearchSuccess(searchResults));
    }
    catch (error) {
        yield put(requestSearchError())
    }

}

export default function* watchSearchLoad() {
        yield takeEvery(SEARCH.LOAD, handleSearchLoad);
}