import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
const MainNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#091224'} barStyle={'light-content'} />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
