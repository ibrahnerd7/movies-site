import { all } from 'redux-saga/effects';
import trendingSaga from './trendingSaga';
import popularSaga from './popularSaga';
import searchSaga from './searchSaga';
import showsSaga from './showsSaga';
import peopleSaga from './peopleSaga';
import movieSaga from './movieSaga';
import reviewsSaga from './reviewsSaga';

export default function* rootSaga(){
    yield all([trendingSaga(),popularSaga(),searchSaga(),showsSaga(),peopleSaga(), movieSaga(), reviewsSaga()]);
}