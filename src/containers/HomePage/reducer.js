import produce from "immer";
import { ADD_EMPLOYEE, EDIT_EMPLOYEE } from "./constants";

export const initialState = [
  {
    id: 1,
    firstName: "Иван",
    lastName: "Петров",
    position: "Директор",
    description: "Очень хороший сотрудник"
  }
];

const employeeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_EMPLOYEE:
        action.employee.id = draft.length + 1;
        draft.push(action.employee);
        break;
      case EDIT_EMPLOYEE:
        draft.employees = [];
        break;
      default:
        return state;
    }
  });

export default employeeReducer;
