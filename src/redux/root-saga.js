import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user-saga";

export default function* rootSaaga() {
  yield all([call(fetchCollectionsStart, call(userSagas))]);
}
