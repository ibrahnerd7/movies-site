import { combineReducers } from 'redux';
import trendingReducer from './trending'
import popularReducer from './popular';
import searchReducer from './search';
import showsReducer from './shows';
import peopleReducer from './people';
import movieReducer from './movie';
import reviewsReducer from './reviews';

const rootReducer= combineReducers({
  trendings:trendingReducer,
  populars:popularReducer,
  search:searchReducer,
  shows:showsReducer,
  people:peopleReducer,
  movie:movieReducer,
  reviews:reviewsReducer,
});

export default rootReducer;