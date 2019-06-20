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
        const { id } = action.employee;
        const index = draft.findIndex(emp => emp.id === id);
        Object.keys(draft[index]).forEach(
          item => (draft[index][item] = action.employee[item])
        );
        break;
      default:
        return state;
    }
  });

export default employeeReducer;
