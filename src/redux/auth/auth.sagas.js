import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import AUTH_ACTION_TYPES from "./auth.action-types";
import { successLogin, successSignup } from "./auth.actions";

// LOGIN
export function* handleLoginAsync() {
  yield takeLatest(AUTH_ACTION_TYPES.START_LOGIN, handleLogin);
}

export function* handleLogin(action) {
  try {
    let data = yield axios({
      url: "api/users/login",
      method: "POST",
      data: action.payload.data,
    });
    yield put(successLogin(data.data.token));
    action.payload.afterSuccess();
  } catch (error) {}
}

// SIGN UP
export function* handleSignupAsync() {
  yield takeLatest(AUTH_ACTION_TYPES.START_SIGN_UP, handleSignup);
}

export function* handleSignup(action) {
  try {
    let data = yield axios({
      url: "api/users/signup",
      method: "POST",
      data: action.payload,
    });
    yield put(successSignup(data.data));
  } catch (error) {}
}
