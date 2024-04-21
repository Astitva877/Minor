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
import firestore from '@react-native-firebase/firestore';

const Dashboard = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pickerValue, setPickerValue] = useState('Other');
  const [users, setUsers] = useState([]);

  useEffect(() => { 
    try {
      firestore().collection('ca').get()
      .then((data) =>{
        console.log('data', data.docs);
        setUsers(data.docs);
      })
      .catch((error) => {
        console.log('error', error);
      });
    } catch (error) {
      console.log('error in cacth', error);
    }
  }, []);
  const renderItem = ({item}) => {
    return (
      <View style={styles.cardView}>
        <Card
          title={item._data.city}
          userName={item._data.name}
          address={item._data.address}
          amount={item._data.email}
          totalApplied={item._data.icaiNumber}
          datePosted={item._data.number}
          discription={item._data.discription}
          navigation={navigation}
          // imageUrl={item.imageUrl}
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
            {/* <Image
              style={styles.imageStyle}
              source={require('../assests/upstart-high-resolution-logo-transparent.png')}
              resizeMode="contain"
            /> */}
            <Text style={{fontSize:35,fontWeight:'700',color:'black'}}>
              UpStart
            </Text>
          </View>
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
          </View>

          <FlatList
            data={users}
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
    width: '55%',
    height: '100%',
    //backgroundColor: 'yellow',
    marginLeft: '3%',
    justifyContent: 'center',
  },
  imageStyle: {
    height: '60%',
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
