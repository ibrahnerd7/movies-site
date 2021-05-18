import { runSaga } from 'redux-saga';
import * as api from '../../../infrastructure/services/api/shows'
import { requestShowsError, requestShowsSuccess } from '../../actions-creators/shows';
import { requestTrendingsError } from '../../actions-creators/trending';
import { handleShowsLoad } from '../showsSaga';

test('should load shows and handle them in case of success', async() => {
    const dispatchedActions=[];
    const mockedTrendings=['abc','div'];

    api.getShowsByType=jest.fn(()=>Promise.resolve(mockedTrendings))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handleShowsLoad,"popular").done;
    expect(api.getShowsByType.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestShowsSuccess(mockedTrendings))
});

test('should load shows and handle them in case of fail', async() => {
    const dispatchedActions=[]

    const error="Some error was thrown";
    api.getShowsByType=jest.fn(()=>Promise.reject(error))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handleShowsLoad,"day").done;
    expect(api.getShowsByType.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestShowsError(error))
});