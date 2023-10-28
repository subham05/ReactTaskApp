import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenName} from '../Constants/screenName';
import Home from '../screens/Home';
import Post from '../screens/Post';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={screenName.home}
        component={Home}
        options={{animation: 'default'}}
      />
      <Stack.Screen
        name={screenName.post}
        component={Post}
        options={{animation: 'default'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
