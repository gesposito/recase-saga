import { fork } from "redux-saga/effects";

import { watchfetchRepos } from "./repos";

export default function* rootSaga() {
  yield fork(watchfetchRepos);
}
