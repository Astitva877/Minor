import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import GetStarted from '../screens/GetStarted';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import Dashboard from '../screens/Dashboard';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyApplications from '../screens/MyApplications';
import PostWork from '../screens/PostWork';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="MyApplications" component={MyApplications} />
      <Drawer.Screen name="PostWork" component={PostWork} />
    </Drawer.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default RootNavigator;
