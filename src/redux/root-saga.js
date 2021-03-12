import { all, call } from "redux-saga/effects";
import { handleLoginAsync, handleSignupAsync } from "./auth/auth.sagas";
import { handleCRUDServiceAsync } from "./ourServices/service.sagas";
import { handleCRUDNewsAsync } from "./news/news.sagas";

export default function* rootSaga() {
  yield all([
    // AUTH
    call(handleLoginAsync),
    call(handleSignupAsync),
    // SERVICES
    call(handleCRUDServiceAsync),
    call(handleCRUDNewsAsync),
  ]);
}
