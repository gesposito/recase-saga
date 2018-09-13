import { call, put, takeLatest } from "redux-saga/effects";

import api from "../api";

import { REQUEST_REPOS, receiveRepos } from "../actions/";

function* fetchRepos(action) {
  const response = yield call(api.get, action.profile);
  yield put(receiveRepos(action.profile, response));
}

export function* watchfetchRepos() {
  yield takeLatest(REQUEST_REPOS, fetchRepos);
}
