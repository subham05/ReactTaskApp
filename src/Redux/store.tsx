import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './Saga/';

import PostReducer from './Reducers/PostReducer';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    PostReducer: PostReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;
