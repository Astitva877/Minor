/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import ButtonFormat from '../components/ButtonFormat';
import CustomInput from '../components/CustomInput';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
export default function WorkEX({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000050',
          }}>
          <View
            style={{
              flex: 0.4,
              backgroundColor: 'white',
              width: '70%',
              borderRadius: 35,
              elevation: 30,
            }}>
            <View
              style={{
                alignItems: 'center',
                // backgroundColor: 'red',
                justifyContent: 'flex-end',
              }}>
              <View style={{width: '85%', marginTop: 10}}>
                <CustomInput
                  placeholder={'Work type'}
                  leftIconType={
                    <Foundation name={'paperclip'} size={24} color={'black'} />
                  }
                />
                <CustomInput
                  placeholder={'Location'}
                  leftIconType={
                    <Ionicons
                      name={'location-outline'}
                      size={24}
                      color={'black'}
                    />
                  }
                />
                <CustomInput
                  placeholder={'Date'}
                  leftIconType={
                    <Fontisto name={'date'} size={24} color={'black'} />
                  }
                />
              </View>

              <ButtonFormat
                buttonStyle={[styles.button1]}
                onpress={() => setModalVisible(!modalVisible)}>
                <Text style={{color: 'white', fontWeight: '500'}}>Add</Text>
              </ButtonFormat>
            </View>
          </View>
        </View>
      </Modal>
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
          Work Experience
        </Text>
      </View>
      <View
        style={{flex: 0.15, alignItems: 'center', justifyContent: 'center'}}>
        <ButtonFormat
          buttonStyle={[styles.button]}
          onpress={() => setModalVisible(true)}>
          <Text style={{color: 'white', fontWeight: '500'}}>
            Add Experience
          </Text>
        </ButtonFormat>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button1: {
    width: '35%',
    height: 40,
    backgroundColor: '#063a8d',
    elevation: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
});
