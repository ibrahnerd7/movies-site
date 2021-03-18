import { combineReducers } from 'redux';
import trendingReducer from './trending'
import popularReducer from './popular';
import searchReducer from './search'
import showsReducer from './shows'

const rootReducer= combineReducers({
  trendings:trendingReducer,
  populars:popularReducer,
  search:searchReducer,
  shows:showsReducer
});

export default rootReducer;