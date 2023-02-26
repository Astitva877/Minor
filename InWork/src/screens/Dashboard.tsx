/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal,
  Text,
} from 'react-native';
import Card from '../components/Card';
//import AntDesign from 'react-native-vector-icons/AntDesign';
//import Ionicon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomInput from '../components/CustomInput';
import ButtonFormat from '../components/ButtonFormat';
import {Picker} from '@react-native-picker/picker';

const Dashboard = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pickerValue, setPickerValue] = useState('Other');
  const DATA = [
    {
      id: '1',
      title: 'Sofa Set Repair',
      userName: 'Kamal',
      address: '104, New Tilak Nagar Vijay Nagar Indore Madhya Pradesh',
      datePosted: '24 Oct',
      totalApplied: '24',
      amount: '500',
    },
    {
      id: '2',
      title: 'Sofa Set Repair',
      userName: 'Chinmay',
      address: '104, New Tilak Nagar',
      datePosted: '24 Oct',
      totalApplied: '24',
      amount: '500',
    },
    {
      id: '3',
      title: 'Sofa Set Repair',
      userName: 'Dheeraj',
      address: '104, New Tilak Nagar',
      datePosted: '24 Oct',
      totalApplied: '24',
      amount: '500',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.cardView}>
        <Card
          title={item.title}
          userName={item.userName}
          address={item.address}
          amount={item.amount}
          totalApplied={item.totalApplied}
          datePosted={item.datePosted}
          navigation={navigation}
        />
      </View>
    );
  };
  return (
    //<>
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled={false}>
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
                flex: 0.5,
                backgroundColor: 'white',
                width: '75%',
                borderRadius: 25,
                elevation: 15,
              }}>
              <View>
                <Text style={{fontSize: 20, fontWeight: '600', margin: 10}}>
                  Location
                </Text>
                <CustomInput
                  placeholder={'select locality'}
                  leftIconType={
                    <Entypo name={'location'} size={24} color={'black'} />
                  }
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '600',
                    marginBottom: 10,
                    marginStart: 10,
                  }}>
                  Job type
                </Text>
                <View style={{height: '25%'}}>
                  <Picker
                    style={{height: '100%', width: '95%'}}
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
                  <Text style={{color: 'white', fontWeight: '500'}}>
                    Apply Filter
                  </Text>
                </ButtonFormat>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
        <View
          style={{
            flex: 0.1,
            flexDirection: 'row',
            //backgroundColor: 'red',
            justifyContent: 'flex-start',
          }}>
          <TouchableOpacity
            style={{
              width: '10%',
              margin: '2%',
              marginTop: '6%',
              height: '50%',
              // /alignItems:'flex-start',
              //backgroundColor: 'blue',
            }}
            onPress={() => navigation.openDrawer()}>
            <Octicons name={'three-bars'} size={30} color={'black'} />
          </TouchableOpacity>
          <View style={styles.imageView}>
            <Image
              style={styles.imageStyle}
              source={require('../assests/InWorkBLUE.png')}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('PostWork')}
            style={{
              //backgroundColor: 'pink',
              marginLeft: '10%',
              justifyContent: 'center',
            }}>
            <MaterialIcons
              name={'add-circle-outline'}
              size={30}
              color={'black'}
            />
          </TouchableOpacity>
          <View
            style={{
              //backgroundColor: 'yellow',
              justifyContent: 'center',
              marginLeft: '2%',
            }}>
            <MaterialIcons
              name={'chat-bubble-outline'}
              size={30}
              color={'black'}
            />
          </View>
          <View style={styles.ProPhoto}>
            <Image
              style={styles.CornerImage}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </View>
        </View>
        <View style={{flex: 0.9}}>
          <View style={{flexDirection: 'row', height: '10%'}}>
            <View
              style={{
                //backgroundColor: 'blue',
                width: '10%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Fontisto name={'search'} size={25} color={'black'} />
            </View>
            <View
              style={{
                // backgroundColor: 'yellow',
                width: '80%',
                alignContent: 'flex-start',
                justifyContent: 'center',
                height: '100%',
              }}>
              <TextInput style={styles.input} placeholder="Search" />
            </View>
            <View
              style={{
                width: '10%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Entypo name={'sound-mix'} size={25} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  cardView: {width: '100%', alignItems: 'center', marginTop: 10},
  input: {
    height: '50%',
    //margin: '3%',
    borderWidth: 1,
    padding: 10,
    borderColor: '#abafb3',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  imageView: {
    width: '40%',
    height: '100%',
    //backgroundColor: 'yellow',
    marginLeft: '3%',
    justifyContent: 'center',
  },
  imageStyle: {
    height: '100%',
    width: '75%',
  },
  CornerImage: {
    height: '55%',
    width: '72%',
    borderRadius: 45,
    marginLeft: '15%',
  },
  ProPhoto: {
    height: '100%',
    //backgroundColor:'blue',
    width: '15.5%',
    justifyContent: 'center',
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
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000050',
  },
});
