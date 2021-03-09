import AUTH_ACTION_TYPES from "./auth.action-types";

const INITIAL_STATE = {
  token: null,
  user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SUCCESS_LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case AUTH_ACTION_TYPES.SUCCESS_SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
