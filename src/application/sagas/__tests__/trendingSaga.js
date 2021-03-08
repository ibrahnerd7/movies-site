import { runSaga } from 'redux-saga';
import * as api from '../../../infrastructure/services/api/trending'
import { requestTrendingsSuccess } from '../../actions-creators/trending';
import {handleTrendingLoad} from '../trendingSaga';

test('should load trendings and handle them in case of success', async() => {
    const dispatchedActions=[]

    const mockedTrendings=['abc','div'];
    api.getTrendingByTimeWindow=jest.fn(()=>Promise.resolve(mockedTrendings))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handleTrendingLoad).done;
    expect(api.getTrendingByTimeWindow.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestTrendingsSuccess(mockedTrendings))
});