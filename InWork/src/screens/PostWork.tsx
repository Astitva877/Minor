/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomInput from '../components/CustomInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';
import {CheckBox} from '@rneui/base';
import ButtonFormat from '../components/ButtonFormat';

const PostWork = ({navigation}) => {
  const [pickerValue, setPickerValue] = useState('Other');
  const [isSelected, setSelection] = useState(false);
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled={false}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
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
            Post Job
          </Text>
        </View>
        <View style={{flex: 0.33}}>
          <View
            style={{
              // backgroundColor: 'red',
              flex: 1,
              marginTop: '2%',
              marginRight: '3%',
              marginStart: '3%',
            }}>
            <CustomInput
              heading={'UserName'}
              placeholder={'Name'}
              leftIconType={
                <Ionicons name={'person-outline'} size={24} color={'black'} />
              }
            />
            <CustomInput
              heading={'Address'}
              placeholder={'Address'}
              leftIconType={
                <Ionicons name={'location-outline'} size={24} color={'black'} />
              }
            />
            <CustomInput
              heading={'Job Title'}
              placeholder={'Job Title'}
              leftIconType={
                <MaterialCommunityIcons
                  name={'tie'}
                  size={24}
                  color={'black'}
                />
              }
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.1,
            marginTop: '10%',
            marginStart: '3%',
            //marginRight: '3%',
            marginHorizontal: '3%',
          }}>
          <CustomInput
            heading={'Description'}
            placeholder={'Description'}
            leftIconType={
              <AntDesign name={'filetext1'} size={24} color={'black'} />
            }
          />
        </View>
        <View style={{flex: 0.1, flexDirection: 'row'}}>
          <View style={{flex: 0.5, flexDirection: 'column'}}>
            <Text
              style={{
                marginLeft: '10%',
                color: 'gray',
                fontWeight: '800',
                fontSize: 17,
              }}>
              Job Type
            </Text>
            <View style={styles.piker}>
              <Picker
                style={{height: '45%', width: '100%'}}
                selectedValue={pickerValue}
                onValueChange={itemValue => setPickerValue(itemValue)}>
                <Picker.Item label="Carpentry" value="Carpentry" />
                <Picker.Item label="Plumbing" value="Plumbing" />
                <Picker.Item label="R.O Service" value="R.O Service" />
                <Picker.Item label="Electrician" value="Electrician" />
                <Picker.Item label="Labour" value="Labour" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
            </View>
          </View>
          <View style={{flex: 0.5, marginEnd: '4%'}}>
            <CustomInput
              heading={'Price'}
              placeholder={'0000'}
              leftIconType={
                <FontAwesome name={'rupee'} size={24} color={'black'} />
              }
            />
          </View>
        </View>
        <View style={styles.lowerView}>
          <ButtonFormat
            buttonStyle={styles.signUpView}
            onpress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.signUpText}>Submit</Text>
          </ButtonFormat>
          <Text style={{color: '#d0cfcf'}}>
            __________________________________________________
          </Text>
          <ButtonFormat buttonStyle={styles.googleView} onpress={undefined}>
            <Text style={styles.googleText}>Cancel</Text>
          </ButtonFormat>
        </View>
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
export default PostWork;
