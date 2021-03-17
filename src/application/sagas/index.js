import { all } from 'redux-saga/effects';
import trendingSaga from './trendingSaga';
import popularSaga from './popularSaga';
import searchSaga from './searchSaga';

export default function* rootSaga(){
    yield all([trendingSaga(),popularSaga(),searchSaga()]);
}