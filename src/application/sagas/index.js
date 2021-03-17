import { all } from 'redux-saga/effects';
import trendingSaga from './trendingSaga';
import popularSaga from './popularSaga';

export default function* rootSaga(){
    yield all([trendingSaga(),popularSaga()]);
}