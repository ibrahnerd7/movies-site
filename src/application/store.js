import {compose, applyMiddleware, createStore} from 'redux';


//dev tool
const composeEnhancers=(process.env.NODE_ENV === "development"  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const configureStore=(services)=>createStore(composeEnhancers(applyMiddleware()))