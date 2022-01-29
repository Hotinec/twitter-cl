import { all } from "@redux-saga/core/effects";
import { tagsSaga } from "./ducks/tags/saga";
import { tweetsSaga } from "./ducks/tweets/saga";

export default function* rootSaga() {
  yield all([
    tweetsSaga(),
    tagsSaga(),
  ]);
}
