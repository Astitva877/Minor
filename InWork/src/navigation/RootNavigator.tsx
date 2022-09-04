import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import GetStarted from '../screens/GetStarted';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'Login'}}
      />
    </Stack.Navigator>
  );
};
export default RootNavigator;
