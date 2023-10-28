/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainNavigator from './src/Navigator/MainNavigator';
import {Provider} from 'react-redux';
import store from './src/Redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App;
