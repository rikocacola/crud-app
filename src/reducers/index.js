import { combineReducers } from "redux";

import postReducer from './postReducer';

export const reducers = combineReducers({
  posts: postReducer
})