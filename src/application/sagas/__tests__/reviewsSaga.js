import { takeEvery } from '@redux-saga/core/effects';
import { runSaga } from 'redux-saga';
import * as api from '../../../infrastructure/services/api/reviews'
import { requestReviewsError, requestReviewsSuccess } from '../../actions-creators/reviews';
import { REVIEWS } from '../../constants';
import watchReviewsLoad, { handleReviewsLoad } from '../reviewsSaga';

test('should load reviews', async() => {
    const gen =watchReviewsLoad();

    const expected=takeEvery(REVIEWS.LOAD,handleReviewsLoad);
    const actual=gen.next().value;

    expect(actual).toEqual(expected);
});

test('should load reviews and handle them in case of success', async() => {
    const dispatchedActions=[];
    const mockedReviews=[{id:'123',name:"Recommendation movie one"}];

    api.getReviewsByMovie=jest.fn(()=>Promise.resolve(mockedReviews))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handleReviewsLoad,"12").done;
    expect(api.getReviewsByMovie.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestReviewsSuccess(mockedReviews))
});

test('should load reviews and handle them in case of fail', async() => {
    const dispatchedActions=[]

    const error="Some error was thrown";
    api.getReviewsByMovie=jest.fn(()=>Promise.reject(error))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handleReviewsLoad,"movie").done;
    expect(api.getReviewsByMovie.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestReviewsError())
});