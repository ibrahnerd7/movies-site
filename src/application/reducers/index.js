import { combineReducers } from 'redux';
import trendingReducer from './trending'
import popularReducer from './popular';

const rootReducer= combineReducers({
  trendings:trendingReducer,
  populars:popularReducer
});

export default rootReducer;