import { all } from 'redux-saga/effects';
import trendingSaga from './trendingSaga';

export default function* rootSaga(){
    yield all([trendingSaga(),]);
}