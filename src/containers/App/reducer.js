import produce from "immer";
import { OPEN_MODAL, CLOSE_MODAL } from "./constants";

export const initialState = {
  isOpen: false
};

const modalReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case OPEN_MODAL:
        draft.isOpen = true;
        break;
      case CLOSE_MODAL:
        draft.isOpen = false;
        break;
    }
  });
export default modalReducer;
