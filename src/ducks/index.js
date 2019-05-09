import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
// import { connectRouter } from "connected-react-router";

export const rootEpic = combineEpics();

export default history =>
  combineReducers({
    // router: connectRouter(history)
  });
