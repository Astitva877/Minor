import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import ButtonFormat from '../components/ButtonFormat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomInput from '../components/CustomInput';

const SignUpScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailRrror, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [nameMessage, setNameMessage] = useState('');
  const [emailMessage, setEmailMesage] = useState('');
  const [passMessage, setPassMessage] = useState('');
  const [message, setMessage] = useState('');
  const handleSign = () => {
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
    } else if (pass === '') {
      setPassError(true);
      setEmailError(false);
      setEmailMesage('');
      setNameError(false);
      setNameMessage('');
      setPassMessage('* Please Set a Password');
    } else if (pass.length < 6) {
      setPassError(true);
      setPassMessage('* Password should be of minimum 6 character');
    } else {
      setEmailError(false);
      setPassError(false);
      try {
        const isUserCreated = await auth().createUserWithEmailAndPassword(
          email,
          pass,
        );
        alert('User Created');
        navigation.navigate('Home');
        console.log(isUserCreated);
      } catch (err) {
        console.log(err);

        setMessage(err.message);
      }
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      enabled={false}>
      <View style={{flex: 1}}>
        <View style={styles.upperView}>
          <View style={styles.topUpperView}>
            <TouchableOpacity
              style={styles.backButtonStyle}
              onPress={() => navigation.goBack()}>
              <Image
                source={require('../assests/left-chevron.png')}
                style={styles.logoStyle}
              />
            </TouchableOpacity>
            <Text style={styles.signTextStyle}> Sign Up</Text>
          </View>
        </View>
        <View style={styles.middleView}>
          <View style={styles.topMiddleView}>
            <CustomInput
              heading={'Name'}
              value={name}
              onChangeText={value => setName(value)}
              leftIconType={
                <Ionicons name={'person-outline'} size={24} color={'black'} />
              }
            />
            <CustomInput
              heading={'Email'}
              value={email}
              onChangeText={value => setEmail(value)}
              leftIconType={
                <MaterialIcons
                  name={'mail-outline'}
                  size={24}
                  color={'black'}
                />
              }
            />
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <CustomInput
                heading={'Password'}
                value={pass}
                onChangeText={value => setPass(value)}
                leftIconType={
                  <MaterialCommunityIcons
                    name={'lock-open-outline'}
                    size={24}
                    color={'black'}
                  />
                }
                secureTextEntry={visible}
                rightIconType={
                  <Ionicons name={'eye-off'} size={20} color={'black'} />
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lowerView}>
          <ButtonFormat
            buttonStyle={styles.signUpView}
            onpress={() => handleSign()}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </ButtonFormat>
          <Text style={{color: '#DFDFDF'}}>__________________</Text>
          <ButtonFormat buttonStyle={styles.googleView} onpress={undefined}>
            <Image
              source={require('../assests/G-Icon.png')}
              style={styles.googleIcon}
              resizeMode="contain"
            />
            <Text style={styles.googleText}>Continue with Google</Text>
          </ButtonFormat>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  signUpView: {
    width: '75%',
    height: '22%',
    backgroundColor: '#063a8d',
    elevation: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleView: {
    width: '75%',
    height: '22%',
    backgroundColor: '#ffffff',
    elevation: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '10%',
    marginTop: '4%',
  },
  googleIcon: {height: '97%', width: '20%'},
  googleText: {color: '#7b7d80', fontSize: 17, fontWeight: '700'},
  logoStyle: {
    width: '95%',
    height: '95%',
    elevation: 10,
  },
  upperView: {flex: 0.3, alignItems: 'center'},
  middleView: {flex: 0.4, alignItems: 'center'},
  lowerView: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  topUpperView: {
    width: '90%',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  backButtonStyle: {width: '17%', height: '27%', elevation: 15},
  signTextStyle: {fontSize: 45, fontWeight: 'bold', color: 'black'},
  topMiddleView: {width: '90%'},
  signUpText: {
    color: '#ffffff',
    fontSize: 20,
    elevation: 10,
    shadowColor: 'blue',
    fontWeight: '500',
  },
});
