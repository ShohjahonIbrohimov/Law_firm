import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import QUESTIONS_ACTION_TYPES from "./questions.action-types";
import { successCrudQuestions } from "./questions.actions";

// LOGIN
export function* handleCRUDquestionsAsync() {
  yield takeLatest(
    QUESTIONS_ACTION_TYPES.START_CRUD_QUESTIONS,
    handleCRUDquestions
  );
}

export function* handleCRUDquestions(action) {
  const payload = action.payload;
  console.log();
  try {
    let data = yield axios({
      url: payload.url,
      method: payload.method,
      data: payload.data,
    });

    yield put(
      successCrudQuestions({ method: payload.method, data: data.data.data })
    );
    payload.afterSuccess();
  } catch (error) {
    payload.afterError();
  }
}
