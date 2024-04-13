/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  // TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Card from '../components/Card';
import Card2 from '../components/Card2';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicon from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import Octicons from 'react-native-vector-icons/Octicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MyApplications = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      title: 'Car Paint',
      userName: 'Kamal',
      address: '21, Rajendra Nagar',
      datePosted: '24 Apr',
      //   totalApplied: '24',
      amount: '1000',
    },
    {
      id: '2',
      title: 'Room Paint',
      userName: 'Vikas Gupta',
      address: '123, Tilak Nagar',
      datePosted: '24 Oct',
      //   totalApplied: '24',
      amount: '8500',
    },
    {
      id: '3',
      title: 'Bathroom Leakage',
      userName: 'Dheeraj',
      address: '104, New Tilak Nagar',
      datePosted: '24 Oct',
      // totalApplied: '24',
      amount: '500',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.cardView}>
        <Card2
          title={item.title}
          userName={item.userName}
          address={item.address}
          amount={item.amount}
          //   totalApplied={item.totalApplied}
          datePosted={item.datePosted}
          totalApplied={''}
          navigation={undefined}
        />
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
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
          My Application
        </Text>
      </View>
      <View style={{flex: 0.9}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyApplications;
const styles = StyleSheet.create({
  cardView: {width: '100%', alignItems: 'center', marginTop: 10},
  input: {
    height: '60%',
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
  logoStyle: {
    width: '95%',
    height: '95%',
    marginLeft: '8%',
    //backgroundColor:'red'
  },
  backButtonStyle: {
    width: '16%',
    height: '80%',
    elevation: 15,
    marginTop: '2%',
  },
});
