import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import modalReducer from "containers/App/reducer";
import employeeReducer from "containers/HomePage/reducer";

import history from "utils/history";

export default () => {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    modal: modalReducer,
    employees: employeeReducer,
  });
  return rootReducer;
};
