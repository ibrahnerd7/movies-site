import { takeEvery } from '@redux-saga/core/effects';
import { runSaga } from 'redux-saga';
import * as api from '../../../infrastructure/services/api/search'
import { requestSearchError, requestSearchSuccess } from '../../actions-creators/search';
import { } from '../../actions-creators/search';
import { SEARCH } from '../../constants';
import watchSearchLoad, { handleSearchLoad } from '../searchSaga';

test('should load search', async() => {
    const gen =watchSearchLoad();

    const expected=takeEvery(SEARCH.LOAD,handleSearchLoad);
    const actual=gen.next().value;

    expect(actual).toEqual(expected);
});

test('should load search results and handle them in case of success', async() => {
    const dispatchedActions=[];
    const mockedResults=[{id:'123',name:"The good doctor"}];

    api.getSearchResults=jest.fn(()=>Promise.resolve(mockedResults))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handleSearchLoad,"doctor").done;
    expect(api.getSearchResults.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestSearchSuccess(mockedResults))
});

test('should load  search results and handle them in case of fail', async() => {
    const dispatchedActions=[]

    const error="Some error was thrown";
    api.getSearchResults=jest.fn(()=>Promise.reject(error))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handleSearchLoad,"movie").done;
    expect(api.getSearchResults.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestSearchError())
});