import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './Saga/';

import PostReducer from './Reducers/PostReducer';
import {postsapi} from '../api/api';

// const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    [postsapi.reducerPath]: postsapi.reducer,
    // PostReducer: PostReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(postsapi.middleware),
  // middleware: [sagaMiddleware],
});

// sagaMiddleware.run(rootSaga);
export default store;
