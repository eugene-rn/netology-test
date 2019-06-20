import { ADD_EMPLOYEE, EDIT_EMPLOYEE } from "./constants";

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  employee,
});

export const editEmployee = (employee) => ({
  type: EDIT_EMPLOYEE,
  employee,
});