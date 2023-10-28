import {all} from 'redux-saga/effects';
import {postSagas} from './PostSaga';

const combineSagas = [...postSagas];
export default function* rootSaga() {
  yield all(combineSagas);
}
