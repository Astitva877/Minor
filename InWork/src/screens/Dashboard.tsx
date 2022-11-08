/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import Card from '../components/Card';
//import AntDesign from 'react-native-vector-icons/AntDesign';
//import Ionicon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Dashboard = () => {
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
        />
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          //backgroundColor: 'red',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            width: '10%',
            margin: '2%',
            marginTop: '6%',
            height: '50%',
            // /alignItems:'flex-start',
            //backgroundColor: 'blue',
          }}>
          <Octicons name={'three-bars'} size={30} color={'black'} />
        </View>
        <View style={styles.imageView}>
          <Image
            style={styles.imageStyle}
            source={require('../assests/InWorkBLUE.png')}
            resizeMode="contain"
          />
        </View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            // backgroundColor: 'pink',
            marginLeft: '12%',
            justifyContent: 'center',
          }}>
          <MaterialIcons
            name={'add-circle-outline'}
            size={30}
            color={'black'}
          />
        </View>
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
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              //backgroundColor: 'blue',
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Fontisto name={'search'} size={25} color={'black'} />
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
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
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name={'sound-mix'} size={25} color={'black'} />
          </View>
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
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
    backgroundColor:'white'
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
    width: '63%',
    borderRadius: 45,
    marginLeft: '15%',
  },
  ProPhoto: {
    height: '100%',
    // backgroundColor:'blue',
    width: '15%',
    justifyContent: 'center',
  },
});
