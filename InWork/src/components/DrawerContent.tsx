import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
//import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export function DrawerContent(props) {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.headView}>
        <AntDesign name={'close'} size={35} color={'black'} />
      </View>
      <View style={{flex: 0.1, flexDirection: 'row'}}>
        <View
          style={{
            //backgroundColor: 'white',
            width: '60%',
            marginVertical: '4%',
            marginStart: '1%',
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: '5%',
            }}>
            User Name
          </Text>
          <Text style={{marginLeft: '2%'}}> usermail@gamil.com</Text>
        </View>
        <View
          style={{
            // backgroundColor: 'pink',
            width: '20%',
            marginVertical: '1%',
            marginLeft: '4%',
          }}>
          <Image
            style={styles.CornerImage}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={{marginVertical: '6%'}}>
          <Feather name={'edit-3'} size={28} color={'#063a8d'} />
        </View>
      </View>
      <View style={{flex: 0.3}}>
        <Image
          style={styles.CornerImage2}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={styles.Boxes1}>
        <Text style={styles.TextHead}> My Profile</Text>
        <View style={styles.Name}>
          <Feather name={'file-text'} size={28} color={'black'} />
          <Text style={styles.TextStyle}>Application</Text>
        </View>
        <View style={styles.Name}>
          <Feather name={'clipboard'} size={28} color={'black'} />
          <Text style={styles.TextStyle}>Preferences</Text>
        </View>
        <View style={styles.Name}>
          <Feather name={'briefcase'} size={28} color={'black'} />
          <Text style={styles.TextStyle}>Work Experience</Text>
        </View>
      </View>
      <View style={styles.Boxes2}>
        <Text style={styles.TextHead}> Help And Support</Text>
        <View style={styles.Name}>
          <Octicons name={'question'} size={28} color={'black'} />
          <Text style={styles.TextStyle}>Help Center</Text>
        </View>
        <View style={styles.Name}>
          <Feather name={'thumbs-down'} size={28} color={'black'} />
          <Text style={styles.TextStyle}>Report a Complaint</Text>
        </View>
        <View style={styles.Name}>
          <MaterialIcons name={'logout'} size={28} color={'black'} />
          <Text style={styles.TextStyle}>log out</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headView: {
    // /backgroundColor: 'blue',
    flex: 0.05,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginEnd: '2%',
  },
  CornerImage: {
    height: '75%',
    width: '85%',
    borderRadius: 45,
    marginLeft: '10%',
    marginVertical: '15%',
  },
  CornerImage2: {
    height: '95%',
    width: '90%',
    marginVertical: '2%',
    marginLeft: '4.5%',
    borderRadius: 15,
  },
  TextStyle: {
    fontSize: 20,
    marginLeft: '4%',
    marginVertical: '1%',
    color: 'black',
  },
  TextHead: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop:'5%',
    marginBottom:'3%'
  },
  Boxes1: {
    //backgroundColor: 'pink',
    flex: 0.28,
    marginTop: '15%',
    marginBottom: '10%',
  },
  Boxes2: {
   // backgroundColor: 'pink',
    flex: 0.22,
  },
  Name: {
    flexDirection: 'row',
    marginLeft: '2%',
    marginBottom: '2%',
  },
});
