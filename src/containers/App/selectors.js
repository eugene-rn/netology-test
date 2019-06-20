import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectModal = state => state.modal || initialState;
const selectRouter = state => state.router;

const makeSelectIsModalOpen = () =>
  createSelector(
    selectModal,
    globalState => globalState.isOpen,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  makeSelectIsModalOpen,
  makeSelectLocation,
}