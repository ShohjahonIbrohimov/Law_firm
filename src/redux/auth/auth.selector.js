import { createSelector } from "reselect";

const authSelector = (state) => state.authReducer;

export const selectToken = createSelector(
  [authSelector],
  (authReducer) => authReducer.token
);

// export const selectUser = createSelector(
//     [authSelector],
//     (authReducer) => authReducer.user
// );
