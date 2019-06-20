import { createSelector } from 'reselect';
import { initialState } from "./reducer";

const selectEmployees = state => state.employees || initialState;

const makeSelectEmployees = () =>
  createSelector(
    selectEmployees,
    employeeState => employeeState
  );

export {
  makeSelectEmployees,
}