import { createSelector } from "reselect";

const serviceSelector = (state) => state.serviceSelector;

export const selectServices = createSelector(
  [serviceSelector],
  (serviceReducer) => serviceReducer.services
);
