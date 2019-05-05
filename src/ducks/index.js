import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

export const rootEpic = combineEpics();

export default combineReducers({
  routing
});
