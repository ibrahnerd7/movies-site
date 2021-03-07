import { combineReducers } from 'redux';
import trendingReducer from './trending'

const rootReducer= combineReducers({
  trendings:trendingReducer,
});

export default rootReducer;