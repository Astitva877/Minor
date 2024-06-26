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
import {DrawerContent} from '../components/DrawerContent';
import WorkDetail from '../screens/WorkDetail';
import WorkEX from '../screens/Jobprofile';
import Information from '../screens/Information';
import SplashScreen from '../screens/SplashScreen';
import Chat from '../screens/Chat';
import Preferences from '../screens/Preferences';
import HelpCenter from '../screens/HelpCenter';
import ReportCom from '../screens/ReportCom';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// const DrawerNavigation = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Dashboard"
//       screenOptions={{
//        drawerStyle: {
//          backgroundColor: '#ffffff',
//          width: 240,
//       },
//     }}>
//       <Drawer.Screen
//         name="Dashboard"
//         component={Dashboard}
//         options={{headerShown: false}}
//       />
//       <Drawer.Screen name="MyApplications" component={MyApplications} />
//       <Drawer.Screen name="PostWork" component={PostWork} />
//     </Drawer.Navigator>
//   );
// };
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="MyApplications" component={MyApplications} />
      <Drawer.Screen
        name="PostWork"
        component={PostWork}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
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
        name="Information"
        component={Information}
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
      <Stack.Screen
        name="WorkDetail"
        component={WorkDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WorkEX"
        component={WorkEX}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyApplication"
        component={MyApplications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Preferences"
        component={Preferences}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HelpCenter"
        component={HelpCenter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReportCom"
        component={ReportCom}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default RootNavigator;
