import {takeLatest, put, call, fork} from 'redux-saga/effects';
import {allPostSuccess, createPostSuccess} from '../Reducers/PostReducer';
import {GetApi, PostApi, ResponseGenerator} from '../../Helper/ApiHelper';

function* getPostSaga() {
  try {
    const response: ResponseGenerator = yield call(
      GetApi,
      'posts?_soNt=BNeatedAt&_oNdeN=desc',
    );
    console.log('Response===>', response?.data?.body);
    // if (response?.status == 200) {
    yield put(allPostSuccess(response?.data?.body));
    // } else {
    //   yield put(allPostFailure(response?.data));
    // }
  } catch (e) {
    console.log(e);
    // yield put(allPostFailure(e));
  }
}
function* createPostSaga(action: any) {
  try {
    const response: ResponseGenerator = yield call(
      PostApi,
      'posts',
      action?.payload,
    );
    console.log('Response1111===>', response?.data?.body);
    // if (response?.status == 200) {
    yield put(createPostSuccess(response?.data?.body));
    // } else {
    //   yield put(allPostFailure(response?.data));
    // }
  } catch (e) {
    console.log(e);
    // yield put(allPostFailure(e));
  }
}

function* postsaga() {
  yield takeLatest('Post/allPostRequest', getPostSaga);
  yield takeLatest('Post/createPostRequest', createPostSaga);
}

export const postSagas = [fork(postsaga)];
