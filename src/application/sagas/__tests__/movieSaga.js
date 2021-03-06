import { takeEvery } from '@redux-saga/core/effects';
import { runSaga } from 'redux-saga';
import * as api from '../../../infrastructure/services/api/movies'
import { requestMovieError, requestMovieSuccess } from '../../actions-creators/movie';
import { MOVIE } from '../../constants';
import watchMovieLoad, {handleMovieLoad} from '../movieSaga';

test('should load trendings', async() => {
    const gen =watchMovieLoad();

    const expected=takeEvery(MOVIE.LOAD,handleMovieLoad);
    const actual=gen.next().value;

    expect(actual).toEqual(expected);
});

test('should load movie and handle it in case of success', async() => {
    const dispatchedActions=[];
    const mockedMovie={id:'123',name:"Movie one"};

    api.getMovieById=jest.fn(()=>Promise.resolve(mockedMovie))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }
    await runSaga(fakeStore,handleMovieLoad,"1234").done;
    expect(api.getMovieById.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestMovieSuccess(mockedMovie))
});

test('should load movie and handle them in case of fail', async() => {
    const dispatchedActions=[]

    const error="Some error was thrown";
    api.getMovieById=jest.fn(()=>Promise.reject(error))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handleMovieLoad,"1234").done;
    expect(api.getMovieById.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestMovieError(error))
});