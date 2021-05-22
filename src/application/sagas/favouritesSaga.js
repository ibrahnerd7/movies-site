import { call, put, takeEvery } from 'redux-saga/effects';
import { getFavourites } from '../../infrastructure/services/firebase/database';
import { requestFavouritesError, requestFavouritesSuccess } from '../actions-creators/favourites';
import { FAVOURITES } from '../constants';

export function* handleFavouritesLoad(action) {
    try {
        const favourites = yield call(getFavourites, action.userId);
        yield put(requestFavouritesSuccess(favourites));
    }
    catch (error) {
        yield put(requestFavouritesError())
    }

}

export default function* watchFavouritesLoad() {
    yield takeEvery(FAVOURITES.LOAD,handleFavouritesLoad);
}