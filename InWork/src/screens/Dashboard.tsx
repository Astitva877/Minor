/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
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
      datePosted: '15 Oct',
      totalApplied: '20',
      amount: '500',
      imageUrl:
      'https://3.imimg.com/data3/IF/MS/GLADMIN-169197/carpentry-maintenance-service-125x125.jpg',
    },
    {
      id: '2',
      title: 'Painting',
      userName: 'Chinmay',
      address: '104, New Tilak Nagar',
      datePosted: '24 Oct',
      totalApplied: '34',
      amount: '750',
      imageUrl:
      'https://www.houselogic.com/wp-content/uploads/2011/03/exterior-house-painting-epspainting-standard_c231db00f6cd6e9389489e72c0f32fe0.jpg',
    },
    {
      id: '3',
      title: 'Plumbing',
      userName: 'Dheeraj',
      address: '104, foti kotir',
      datePosted: '17 sep',
      totalApplied: '8',
      amount: '600',
      imageUrl:
      'https://www.betterteam.com/images/plumber-job-description-3999x2999-20201118.jpeg?crop=4:3,smart&width=1200&dpr=2',
    },
    {
      id: '4',
      title: 'Mechanic',
      userName: 'Ankit',
      address: '104, Ragwada,Indore',
      datePosted: '5 Jan',
      totalApplied: '12',
      amount: '1000',
      imageUrl:
      'https://content.jdmagicbox.com/comp/service_catalogue/automobile-dealers-attr-car-repairs-amd7-6.jpg',
    },
    {
      id: '5',
      title: 'R.O Repair',
      userName: 'Aditya',
      address: '24/24 Rau ,Indore',
      datePosted: '5 Dec',
      totalApplied: '6',
      amount: '550',
      imageUrl:
      'https://watersoftindia.com/wp-content/uploads/2021/03/Water-Purifier-Repair-Estimate-Costing.jpg',
    },
    {
      id: '6',
      title: 'Electrician ',
      userName: 'Akhil',
      address: '25/306, Raiti Mandi',
      datePosted: '12 feb',
      totalApplied: '18',
      amount: '350',
      imageUrl:
      'https://www.brilltech.co.in/images/products/img-electrical-work.jpg',
    },
    {
      id: '7',
      title: 'Wood Work',
      userName: 'Saksham',
      address: '35/65 Near Hawa Banglow',
      datePosted: '26 Dec',
      totalApplied: '16',
      amount: '800',
      imageUrl:
      'https://www.designingbuildings.co.uk/w/images/5/5e/Carpenter-carving-wood.jpg',
    },
    {
      id: '8',
      title: 'Sofa Set Repair',
      userName: 'Ashutosh',
      address: 'Fort Of IIM Indore',
      datePosted: '9 Jan',
      totalApplied: '16',
      amount: '1250',
      imageUrl:
      'https://www.serviceonwheel.com/uploads/service/849891670587516.jpg',
    },
    {
      id: '9',
      title: 'Mechanic',
      userName: 'Tanmay',
      address: 'Near Vijay Nagar MR10 Indore',
      datePosted: '16 sep',
      totalApplied: '19',
      amount: '600',
      imageUrl:
      'https://homesteading.com/wp-content/uploads/2019/09/61-Basic-Auto-Mechanic-Skills-To-Fix-Your-Car-Yourself-ss-1200x900.jpg',
    },
    {
      id: '10',
      title: 'Plumbing',
      userName: 'Tushar',
      address: '34/567 near Ragwada Indore',
      datePosted: '21 dec',
      totalApplied: '36',
      amount: '450',
      imageUrl:
          'https://content.jdmagicbox.com/comp/bangalore/b8/080pxx80.xx80.180927141635.g3b8/catalogue/hari-om-plumbing-works-bangalore-0xdpluzsyh.jpg?clr=402626',
    },

  ];
  useEffect(() => {
    const temp = {
      id: '11',
      title: 'Sofa Repair',
      userName: 'Astitva',
      address: 'Indore',
      datePosted: '10 April',
      totalApplied: '0',
      amount: '1000',
      imageUrl: 'https://3.imimg.com/data3/IF/MS/GLADMIN-169197/carpentry-maintenance-service-125x125.jpg',
    };
    DATA.push(temp);
  });

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
          imageUrl={item.imageUrl}
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
          <TouchableOpacity
          onPress={() => navigation.navigate('Chat')}
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
          </TouchableOpacity>
          <View style={styles.ProPhoto}>
            <Image
              style={styles.CornerImage}
              source={{
                uri: 'https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=2000',
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
    backgroundColor: '#00000060',
  },
});
