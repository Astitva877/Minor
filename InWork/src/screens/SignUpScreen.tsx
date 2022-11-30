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
import {Directions} from 'react-native-gesture-handler';

const SignUpScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
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
              heading={'UserName'}
              leftIconType={
                <Ionicons name={'person-outline'} size={24} color={'black'} />
              }
            />
            <CustomInput
              heading={'Email'}
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
          <ButtonFormat buttonStyle={styles.signUpView} onpress={undefined}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </ButtonFormat>
          <Text style={{color: '#DFDFDF'}}>
            __________________________________________________
          </Text>
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
