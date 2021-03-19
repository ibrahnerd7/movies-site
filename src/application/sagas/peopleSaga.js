import { call, put, takeEvery } from 'redux-saga/effects';
import { getPeopleByType } from '../../infrastructure/services/api/people';
import {requestPeopleError,requestPeopleSuccess } from '../actions-creators/people';
import { PEOPLE } from '../constants';

export function* handlePeopleLoad(action) {
    try {
        const people = yield call(getPeopleByType, action.peopleType);
        yield put(requestPeopleSuccess(people));
    }
    catch (error) {
        yield put(requestPeopleError())
    }

}

export default function* watchPeopleLoad() {
    yield takeEvery(PEOPLE.LOAD,handlePeopleLoad);
}