/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';
import Dashboard from './Dashboard';
import GetStarted from './LoginScreen';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    Auth().onAuthStateChanged(user => {
      const routeName = user !== null ? true : false;
      {
        routeName
          ? navigation.navigate('DrawerNavigation', {screen: 'Dashboard'})
          : navigation.navigate('GetStarted');
      }
    });
  }, 3000);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../assests/InWorkBLUE.png')}
        style={{height: '10%', width: '70%'}}
        resizeMode="contain"
      />
    </View>
  );
}
