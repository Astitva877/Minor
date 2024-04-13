/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import ButtonFormat from '../components/ButtonFormat';
const ReportCom = ({navigation}) => {
  return (
    <KeyboardAvoidingView enabled={false} behavior="height" style={{flex: 1}}>
      <View style={{flex: 0.1, flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.backButtonStyle}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../assests/left-chevron.png')}
            style={styles.logoStyle}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: '4%',
            marginTop: '3.3%',
          }}>
          Report a Complaint
        </Text>
      </View>
      <View style={{flex: 0.4}}>
        <TextInput
          style={{
            height: 250,
            width: '96%',
            margin: '2%',
            backgroundColor: 'white',
            borderRadius: 15,
          }}
          maxLength={300}
          multiline={true}
          placeholder=" Put up your Complaint"
        />
      </View>
      <View
        style={{flex: 0.4, alignItems: 'center', justifyContent: 'flex-end'}}>
        <ButtonFormat buttonStyle={[styles.button]} onpress={undefined}>
          <Text style={{color: 'white', fontWeight: '500'}}>Add Complaint</Text>
        </ButtonFormat>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  backButtonStyle: {
    width: '16%',
    height: '80%',
    elevation: 15,
    marginTop: '2%',
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#063a8d',
    elevation: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: '95%',
    height: '95%',
    marginLeft: '8%',
    //backgroundColor:'red'
  },
  piker: {
    height: '70%',
    width: '80%',

    elevation: 8,
    shadowColor: 'black',
    //backgroundColor: 'gray',
    marginStart: '10%',
  },
  lowerView: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  signUpView: {
    width: '65%',
    height: '20%',
    backgroundColor: '#063a8d',
    elevation: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleView: {
    width: '65%',
    height: '20%',
    backgroundColor: '#ffffff',
    elevation: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '4%',
    marginBottom: '2%',
  },
  signUpText: {
    color: '#ffffff',
    fontSize: 20,
    elevation: 10,
    shadowColor: 'blue',
    fontWeight: '500',
  },
  googleIcon: {height: '97%', width: '20%'},
  googleText: {color: '#7b7d80', fontSize: 17, fontWeight: '700'},
});

export default ReportCom;
