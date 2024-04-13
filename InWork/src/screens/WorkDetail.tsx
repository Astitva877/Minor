/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonFormat from '../components/ButtonFormat';

type Props = {
  name?: string;
};

const WorkDetail = ({route, navigation}) => {
  const {name, title, amount, address, imageUrl} = route.params;
  return (
    <View style={styles.Over}>
      <View style={styles.overview}>
        <TouchableOpacity
          style={styles.backButtonStyle}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../assests/left-chevron.png')}
            style={styles.logoStyle}
          />
        </TouchableOpacity>
        <View style={styles.UserView}>
          <Text style={{color: '#666262', fontSize: 25, marginEnd: '15%'}}>
            {name}
          </Text>
        </View>
      </View>
      <View style={styles.photoView}>
        <Image
          style={styles.photocan}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={{alignItems: 'center', flex: 0.03}}>
        <Text style={{color: '#a19d9d'}}>
          __________________________________________________
        </Text>
      </View>
      <View style={styles.title}>
        <View style={{flex: 0.6}}>
          {/* <Text style={{color: '#818080', fontSize: 20, marginStart: '5%'}}>
            carpentry
          </Text> */}
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              marginStart: '5%',
              fontWeight: '600',
            }}>
            {title}
          </Text>
        </View>
        <View style={{flex: 0.4}}>
          <Text style={{color: '#818080', fontSize: 20, marginStart: '5%'}}>
            {' '}
            Wage
          </Text>
          <Text style={{color: 'black', fontSize: 25, marginStart: '5%'}}>
            ₹ {amount}
          </Text>
        </View>
      </View>
      <View style={styles.Discrip}>
        <Text
          style={{
            color: 'black',
            marginStart: '3%',
            marginTop: '5%',
            fontSize: 15,
          }}>
          I have been trying to find a Sofa Set artist online who can provide
          doorstep service. I want mu sofa set Repaired its Showing some sign of
          Termite. Also it old s need some repairing in its leg and some of the
          reparing hear and there.
        </Text>

        <Text
          style={{
            color: 'black',
            marginStart: '3%',
            marginTop: '5%',
            fontSize: 15,
          }}>
          {address}
        </Text>
      </View>
      <View style={styles.AddressView}>
        <TouchableOpacity style={styles.ADDView}>
          <Text style={{color: 'white', fontSize: 20}}>Request Job</Text>
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
    flex: 0.2,
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
});
