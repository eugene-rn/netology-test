import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from 'utils/history';

export default () => {
  const rootReducer = combineReducers({
    router: connectRouter(history),
  });
  return rootReducer;
}
