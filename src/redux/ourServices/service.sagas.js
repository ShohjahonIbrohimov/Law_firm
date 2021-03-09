import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import SERVICES_ACTION_TYPES from "./service.action-types";
import { successCrudService } from "./service.actions";

// LOGIN
export function* handleCRUDServiceAsync() {
  yield takeLatest(SERVICES_ACTION_TYPES.START_CRUD_SERVICE, handleCRUDService);
}

export function* handleCRUDService(action) {
  const payload = action.payload;
  try {
    let data = yield axios({
      url: payload.url,
      method: payload.method,
      data: payload.data,
    });

    yield put(
      successCrudService({ method: payload.method, data: data.data.data })
    );
    payload.afterSuccess();
  } catch (error) {
    console.log(error);
  }
}
