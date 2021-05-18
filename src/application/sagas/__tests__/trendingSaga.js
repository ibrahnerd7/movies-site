import { takeEvery } from '@redux-saga/core/effects';
import { runSaga } from 'redux-saga';
import * as api from '../../../infrastructure/services/api/trending'
import {requestTrendingsError, requestTrendingsSuccess } from '../../actions-creators/trending';
import { TRENDING } from '../../constants';
import watchTrendingLoad, {handleTrendingLoad} from '../trendingSaga';

test('should load trendings', async() => {
    const gen =watchTrendingLoad();

    const expected=takeEvery(TRENDING.LOAD,handleTrendingLoad);
    const actual=gen.next().value;

    expect(actual).toEqual(expected);
});

test('should load trendings and handle them in case of success', async() => {
    const dispatchedActions=[];
    const mockedTrendings=['abc','div'];

    api.getTrendingByTimeWindow=jest.fn(()=>Promise.resolve(mockedTrendings))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handleTrendingLoad,"day").done;
    expect(api.getTrendingByTimeWindow.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestTrendingsSuccess(mockedTrendings))
});

test('should load trendings and handle them in case of fail', async() => {
    const dispatchedActions=[]

    const error="Some error was thrown";
    api.getTrendingByTimeWindow=jest.fn(()=>Promise.reject(error))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handleTrendingLoad,"day").done;
    expect(api.getTrendingByTimeWindow.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestTrendingsError(error))
});