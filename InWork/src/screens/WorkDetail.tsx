/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  KeyboardAvoidingView,
  Linking,
  Platform,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonFormat from '../components/ButtonFormat';
import {ScrollView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../components/CustomInput';
//import {Modal} from 'react-native-paper';

type Props = {
  name?: string;
};

const WorkDetail = ({route, navigation}) => {
  const {name, title, amount, address, imageUrl, icai, discription, number} =
    route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const makeCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${8291775591}`;
    }

    Linking.openURL(phoneNumber);
  };

  return (
    <View style={styles.Over}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <KeyboardAvoidingView
          style={styles.centeredView}
          behavior="height"
          enabled={false}>
          <View
            style={{
              flex: 0.3,
              backgroundColor: 'white',
              width: '75%',
              borderRadius: 25,
              elevation: 15,
            }}>
            <View>
              <Text style={{fontSize: 20, fontWeight: '600', margin: 10}}>
                Contact Number
              </Text>
              <TouchableOpacity
                style={{flexDirection: 'row', marginStart: '5%'}}
                onPress={() => makeCall()}>
                <FontAwesome name={'phone'} size={24} color={'black'} />
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: '400',
                    marginHorizontal: '5%',
                  }}>
                  {number}
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  marginBottom: 10,
                  marginStart: 10,
                  marginTop: 17,
                }}>
                Email
              </Text>
              <View style={{flexDirection: 'row', marginStart: '5%'}}>
                <Entypo name={'mail'} size={24} color={'black'} />
                <Text
                  style={{
                    marginStart: '3%',
                    fontWeight: '400',
                    color: 'black',
                  }}>
                  {amount}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <ButtonFormat
                buttonStyle={[styles.button]}
                onpress={() => setModalVisible(!modalVisible)}>
                <Text style={{color: 'white', fontWeight: '500'}}>Done</Text>
              </ButtonFormat>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <View style={styles.overview}>
        <TouchableOpacity
          style={styles.backButtonStyle}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../assests/left-chevron.png')}
            style={styles.logoStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.UserView}>
          <Text style={{color: '#666262', fontSize: 25, marginEnd: '15%'}}>
            {icai}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginStart: '5%',
          marginTop: '5%',
          //backgroundColor: 'yellow',
          height: 80,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            marginStart: '5%',
            fontWeight: '600',
          }}>
          {name}
        </Text>
      </View>
      <View style={styles.Discrip}>
        <Text style={{fontSize: 12, color: 'gray', fontWeight: '400'}}>
          Discription
        </Text>
        <ScrollView>
          <Text
            style={{
              color: 'black',
              marginStart: '3%',
              marginTop: '5%',
              fontSize: 15,
            }}>
            {discription}
          </Text>
        </ScrollView>
      </View>
      <View style={{flex: 0.1, marginHorizontal: '5%'}}>
        <Text style={{fontSize: 12, fontWeight: '400', color: 'gray'}}>
          Address
        </Text>
        <Text
          style={{
            color: 'black',
            marginStart: '3%',
            fontSize: 20,
            fontWeight: '500',
          }}>
          {address}
        </Text>
      </View>
      <View style={styles.AddressView}>
        <TouchableOpacity
          style={styles.ADDView}
          onPress={() => setModalVisible(true)}>
          <Text style={{color: 'white', fontSize: 20}}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkDetail;
const styles = StyleSheet.create({
  Over: {
    flex: 1,
    //backgroundColor: 'red',
  },
  overview: {
    flex: 0.1,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  backButtonStyle: {
    width: '17%',
    height: '70%',
    elevation: 15,
    marginTop: '3%',
    marginStart: '2%',
  },
  logoStyle: {
    width: '95%',
    height: '95%',
    elevation: 10,
  },
  UserView: {
    // backgroundColor:'orange',
    flex: 0.999,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  photoView: {
    //backgroundColor: 'blue',
    flex: 0.4,
    justifyContent: 'center',
    alignContent: 'center',
  },
  photocan: {
    width: '96%',
    height: '96%',
    margin: '2%',
    borderRadius: 15,
    elevation: 10,
  },
  title: {
    flex: 0.1,
    //backgroundColor: 'red',
    flexDirection: 'row',
    //marginTop:'5%'
  },
  Discrip: {
    flex: 0.6,
    marginHorizontal: '5%',
    //backgroundColor: 'yellow',
  },
  AddressView: {
    flex: 0.171,
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  ADDView: {
    marginTop: '10%',
    marginHorizontal: '5%',
    backgroundColor: '#063a8d',
    height: '40%',
    width: '90%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000060',
  },
  button: {
    width: '35%',
    height: 50,
    backgroundColor: '#063a8d',
    elevation: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
