import AUTH_ACTION_TYPES from "./auth.action-types";

// LOGIN
export const startLogin = (data) => ({
  type: AUTH_ACTION_TYPES.START_LOGIN,
  payload: data,
});

export const successLogin = (data) => ({
  type: AUTH_ACTION_TYPES.SUCCESS_LOGIN,
  payload: data,
});

// SIGN UP
export const startSignup = (data) => ({
  type: AUTH_ACTION_TYPES.START_SIGN_UP,
  payload: data,
});

export const successSignup = (data) => ({
  type: AUTH_ACTION_TYPES.SUCCESS_SIGN_UP,
  payload: data,
});

// LOG OUT
export const logout = (data) => ({
  type: AUTH_ACTION_TYPES.LOG_OUT,
  payload: data,
});
