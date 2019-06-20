import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectEmployees = state => state.employees || initialState;

const makeSelectEmployees = () =>
  createSelector(
    selectEmployees,
    employeeState => employeeState
  );

const makeSelectEmployee = id =>
  createSelector(
    selectEmployees,
    employeeState => employeeState.find(item => item.id === id)
  );

export { makeSelectEmployees, makeSelectEmployee };
