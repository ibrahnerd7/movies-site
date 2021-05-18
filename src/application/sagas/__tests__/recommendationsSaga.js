import { takeEvery } from '@redux-saga/core/effects';
import { runSaga } from 'redux-saga';
import * as api from '../../../infrastructure/services/api/recommendations'
import { requestRecommendationsError, requestRecommendationsSuccess } from '../../actions-creators/recommendations';
import { RECOMMENDATIONS } from '../../constants';
import watchRecommendationsLoad, {handleRecommendationsLoad} from '../recommendationsSaga';

test('should load recommendations', async() => {
    const gen =watchRecommendationsLoad();

    const expected=takeEvery(RECOMMENDATIONS.LOAD,handleRecommendationsLoad);
    const actual=gen.next().value;

    expect(actual).toEqual(expected);
});

test('should load recommendations and handle them in case of success', async() => {
    const dispatchedActions=[];
    const mockedRecommendations=[{id:'123',name:"Recommendation movie one"}];

    api.getRecommendationsByMovie=jest.fn(()=>Promise.resolve(mockedRecommendations))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handleRecommendationsLoad,"12").done;
    expect(api.getRecommendationsByMovie.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestRecommendationsSuccess(mockedRecommendations))
});

test('should load recommendations and handle them in case of fail', async() => {
    const dispatchedActions=[]

    const error="Some error was thrown";
    api.getRecommendationsByMovie=jest.fn(()=>Promise.reject(error))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handleRecommendationsLoad,"movie").done;
    expect(api.getRecommendationsByMovie.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestRecommendationsError())
});