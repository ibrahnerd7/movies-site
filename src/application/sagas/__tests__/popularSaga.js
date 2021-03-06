import { takeEvery } from '@redux-saga/core/effects';
import { runSaga } from 'redux-saga';
import * as api from '../../../infrastructure/services/api/popular'
import { requestPopularError, requestPopularSuccess } from '../../actions-creators/popular';
import { POPULAR } from '../../constants';
import watchPopularLoad, {handlePopularLoad} from '../popularSaga';

test('should load popular', async() => {
    const gen =watchPopularLoad();

    const expected=takeEvery(POPULAR.LOAD,handlePopularLoad);
    const actual=gen.next().value;

    expect(actual).toEqual(expected);
});

test('should load popular and handle them in case of success', async() => {
    const dispatchedActions=[];
    const mockedPeople=[{id:'123',name:"Popular movie one"}];

    api.getPopularByType=jest.fn(()=>Promise.resolve(mockedPeople))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handlePopularLoad,"movie").done;
    expect(api.getPopularByType.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestPopularSuccess(mockedPeople))
});

test('should load popular and handle them in case of fail', async() => {
    const dispatchedActions=[]

    const error="Some error was thrown";
    api.getPopularByType=jest.fn(()=>Promise.reject(error))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handlePopularLoad,"movie").done;
    expect(api.getPopularByType.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestPopularError())
});