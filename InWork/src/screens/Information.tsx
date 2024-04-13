/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import ButtonFormat from '../components/ButtonFormat';
import CustomInput from '../components/CustomInput';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Information = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <View style={styles.topUpperView}>
          <TouchableOpacity
            style={styles.backButtonStyle}
            onPress={() => navigation.goBack()}>
            <View style={{width: '95%', height: '95%', elevation: 30}}>
              <Image
                source={require('../assests/left-chevron.png')}
                style={styles.logoStyle}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.signTextStyle}> User Information</Text>
        </View>
      </View>
      <View style={{flex: 0.6, marginHorizontal: 20}}>
        <CustomInput
          placeholder={' First Name'}
          leftIconType={<Feather name={'user'} size={24} color={'black'} />}
        />
        <CustomInput
          placeholder={'Last Name'}
          leftIconType={<Feather name={'user'} size={24} color={'black'} />}
        />
        <CustomInput
          placeholder={'Age'}
          leftIconType={<Feather name={'calendar'} size={24} color={'black'} />}
        />
        <CustomInput
          placeholder={'Work Preferance'}
          leftIconType={
            <MaterialIcons name={'carpenter'} size={24} color={'black'} />
          }
        />
        <CustomInput
          placeholder={'Enter Your Gender'}
          leftIconType={
            <MaterialCommunityIcons
              name={'human-male-female'}
              size={24}
              color={'black'}
            />
          }
        />
      </View>
      <View
        style={{
          flex: 0.1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ButtonFormat
          buttonStyle={styles.forwardButton}
          onpress={() =>
            navigation.navigate('DrawerNavigation', {screen: 'Dashboard'})
          }>
          <Text style={styles.startedText}>Submit</Text>
        </ButtonFormat>
      </View>
    </View>
  );
};

export default Information;
const styles = StyleSheet.create({
  upperView: {flex: 0.3, alignItems: 'center'},
  topUpperView: {
    width: '90%',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  backButtonStyle: {width: '17%', height: '27%'},
  logoStyle: {
    width: '100%',
    height: '100%',
  },
  signTextStyle: {fontSize: 40, fontWeight: 'bold', color: 'black'},
  container: {
    flex: 1,
  },
  forwardButton: {
    height: '65%',
    width: '65%',
    backgroundColor: '#063a8d',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 15,
  },
  startedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 5,
  },
});
