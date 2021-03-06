import { takeEvery } from '@redux-saga/core/effects';
import { runSaga } from 'redux-saga';
import * as api from '../../../infrastructure/services/api/people'
import { requestPeopleError, requestPeopleSuccess } from '../../actions-creators/people';
import { PEOPLE } from '../../constants';
import watchPeopleLoad, {handlePeopleLoad} from '../peopleSaga';

test('should load people', async() => {
    const gen =watchPeopleLoad();

    const expected=takeEvery(PEOPLE.LOAD,handlePeopleLoad);
    const actual=gen.next().value;

    expect(actual).toEqual(expected);
});

test('should load people and handle them in case of success', async() => {
    const dispatchedActions=[];
    const mockedPeople=[{id:'123',name:"Person one"}];

    api.getPeopleByType=jest.fn(()=>Promise.resolve(mockedPeople))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handlePeopleLoad,"popular").done;
    expect(api.getPeopleByType.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestPeopleSuccess(mockedPeople))
});

test('should load people and handle them in case of fail', async() => {
    const dispatchedActions=[]

    const error="Some error was thrown";
    api.getPeopleByType=jest.fn(()=>Promise.reject(error))

    const fakeStore={
        dispatch:action=>dispatchedActions.push(action)
    }

    await runSaga(fakeStore,handlePeopleLoad,"popular").done;
    expect(api.getPeopleByType.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(requestPeopleError(error))
});