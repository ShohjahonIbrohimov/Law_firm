import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import NEWS_ACTION_TYPES from "./news.action-types";
import { successCrudNews } from "./news.actions";

// LOGIN
export function* handleCRUDNewsAsync() {
  yield takeLatest(NEWS_ACTION_TYPES.START_CRUD_NEWS, handleCRUDNews);
}

export function* handleCRUDNews(action) {
  const payload = action.payload;
  try {
    let data = yield axios({
      url: payload.url,
      method: payload.method,
      data: payload.data,
    });

    yield put(
      successCrudNews({ method: payload.method, data: data.data.data })
    );
    payload.afterSuccess();
  } catch (error) {
    console.log(error);
  }
}
