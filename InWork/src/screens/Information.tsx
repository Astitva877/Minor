/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import ButtonFormat from '../components/ButtonFormat';
import CustomInput from '../components/CustomInput';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
const Information = ({navigation}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [icaiNumber, setIcaiNumber] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailRrror, setEmailError] = useState(false);
  const [nameMessage, setNameMessage] = useState('');
  const [emailMessage, setEmailMesage] = useState('');
  const [numberError, setNumberError] = useState(false);
  const [addressRrror, setAddressError] = useState(false);
  const [numberMessage, setNumberMessage] = useState('');
  const [addressMessage, setAddressMessage] = useState('');
  const [cityError, setCityError] = useState(false);
  const [icaiError, setIcaiError] = useState(false);
  const [cityMessage, setCityMessage] = useState('');
  const [icaiMessage, setIcaiMessage] = useState('');
  const [discription,setDiscription]=useState('');
  const submitData = () => {
    console.log('inside');
    let res = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (name === '') {
      setNameError(true);
      setNameMessage('* please Enter Name');
    } else if (email === '') {
      setEmailError(true);
      setEmailMesage('* Please Enter Email');
      setNameError(false);
      setNameMessage('');
    } else if (res.test(email) === false) {
      setEmailError(true);
      setEmailMesage('* Please Enter Valid Email');
      setNameError(false);
      setNameMessage('');
    } else if (number.length < 10) {
      setNumberError(true);
      setNumberMessage('Enter Valid Number');
    } else if (address.length == 0) {
      setAddressError(true);
      setAddressMessage('Enter a valid Adress');
    } else if (city.length == 0) {
      setCityError(true);
      setCityMessage('Enter a valid Adress');
    } else if (icaiNumber.length < 15) {
      setIcaiError(true);
      setIcaiMessage('Enter a valid Adress');
    } else {
      setEmailError(false);

      try {
        firestore()
          .collection('ca')
          .add({
            name: name,
            number: number,
            address: address,
            email: email,
            city: city,
            icaiNumber: icaiNumber,
            discription: discription,
          })
          .then(() => {
            console.log('User added!');
            ToastAndroid.show('Info Added', ToastAndroid.SHORT);
            navigation.navigate('DrawerNavigation', {screen: 'Dashboard'});
          });
      } catch (error) {
        console.log('error', error);
        ToastAndroid.show('Something Went Wrong!', ToastAndroid.SHORT);
      }
    }
  };
  return (
    <KeyboardAvoidingView enabled={false} style={styles.container}>
      <View style={styles.upperView}>
        <View style={styles.topUpperView}>
          <TouchableOpacity
            style={styles.backButtonStyle}
            onPress={() => navigation.goBack()}>
            <View style={{width: '95%', height: '95%', elevation: 30}}>
              <Image
                source={require('../assests/left-chevron.png')}
                style={styles.logoStyle}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.signTextStyle}> User Information</Text>
        </View>
      </View>
      <KeyboardAvoidingView enabled={false}
        style={{flex: 0.7, marginHorizontal: 20}}>
        <CustomInput
          placeText={'Name'}
          value={name}
          onChangeText={setName}
          leftIconType={<Feather name={'user'} size={24} color={'black'} />}
        />
        {nameError ? (
          <Text style={{color: 'red', marginLeft: 15, marginBottom: 5}}>
            {nameMessage}
          </Text>
        ) : null}
        <CustomInput
          placeText={'Email'}
          value={email}
          onChangeText={setEmail}
          leftIconType={<Feather name={'user'} size={24} color={'black'} />}
        />
        {emailRrror ? (
          <Text style={{color: 'red', marginLeft: 15, marginBottom: 5}}>
            {emailMessage}
          </Text>
        ) : null}
        <CustomInput
          placeholder={'Number'}
          value={number}
          onChangeText={setNumber}
          leftIconType={<Feather name={'calendar'} size={24} color={'black'} />}
        />
        {numberError ? (
          <Text style={{color: 'red', marginLeft: 15, marginBottom: 5}}>
            {numberMessage}
          </Text>
        ) : null}
        <CustomInput
          placeholder={'Address'}
          value={address}
          onChangeText={setAddress}
          leftIconType={
            <MaterialIcons name={'carpenter'} size={24} color={'black'} />
          }
        />
        {addressRrror ? (
          <Text style={{color: 'red', marginLeft: 15, marginBottom: 5}}>
            {addressMessage}
          </Text>
        ) : null}
        <CustomInput
          placeholder={'City'}
          value={city}
          onChangeText={setCity}
          leftIconType={
            <MaterialCommunityIcons
              name={'human-male-female'}
              size={24}
              color={'black'}
            />
          }
        />
        {cityError ? (
          <Text style={{color: 'red', marginLeft: 15, marginBottom: 5}}>
            {cityMessage}
          </Text>
        ) : null}
        <CustomInput
          placeholder={'ICAI Membership Number'}
          value={icaiNumber}
          onChangeText={setIcaiNumber}
          leftIconType={
            <MaterialIcons name={'carpenter'} size={24} color={'black'} />
          }
        />
        {icaiError ? (
          <Text style={{color: 'red', marginLeft: 15, marginBottom: 5}}>
            {cityMessage}
          </Text>
        ) : null}
        <CustomInput
          placeholder={'Discription of your Exprerince'}
          value={discription}
          onChangeText={setDiscription}
          leftIconType={
            <MaterialIcons name={'carpenter'} size={24} color={'black'} />
          }
        />
      </KeyboardAvoidingView>
      <View
        style={{
          flex: 0.1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ButtonFormat
          buttonStyle={styles.forwardButton}
          onpress={() =>
            // navigation.navigate('DrawerNavigation', {screen: 'Dashboard'})
            submitData()
          }>
          <Text style={styles.startedText}>Submit</Text>
        </ButtonFormat>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Information;
const styles = StyleSheet.create({
  upperView: {flex: 0.2, alignItems: 'center'},
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
