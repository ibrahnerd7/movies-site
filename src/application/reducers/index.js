import { combineReducers } from 'redux';
import trendingReducer from './trending'
import popularReducer from './popular';
import searchReducer from './search'

const rootReducer= combineReducers({
  trendings:trendingReducer,
  populars:popularReducer,
  search:searchReducer
});

export default rootReducer;