import {compose, applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';


 const configureStore=()=>{
    const sagaMiddleware=createSagaMiddleware();

    const store=createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
        //    ( !process.env.NODE_ENV || process.env.NODE_ENV === 'development') && window.__REDUX_DEVTOOLS_EXTENSION__ &&
        //     window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    );
        sagaMiddleware.run(rootSaga);

        return store;

}

export default configureStore;