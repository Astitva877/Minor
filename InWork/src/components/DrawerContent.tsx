/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
//import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
//import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Auth from '@react-native-firebase/auth';
export function DrawerContent({navigation}) {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled={false}>
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
            <Text style={{marginLeft: '2%'}}> {Auth().currentUser?.email}</Text>
          </View>
          <View
            style={{
              //backgroundColor: 'pink',
              width: '20%',
              marginVertical: '1%',
              marginLeft: '4%',
              //padding:'2%'
            }}>
            <Image
              style={styles.CornerImage}
              source={{
                uri: 'https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=2000',
              }}
            />
          </View>
          <View style={{marginTop: '10%'}}>
            <Feather name={'edit-3'} size={22} color={'#063a8d'} />
          </View>
        </View>
        <View style={{flex: 0.3, marginTop: '8%'}}>
          <View style={styles.ImageCon}>
            <Image
              style={styles.CornerImage2}
              source={require('../assests/Ca2.png')}
            />
          </View>
        </View>
        <View style={styles.Boxes2}>
          <Text style={styles.TextHead}> Help And Support</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('HelpCenter')}
            style={styles.Name}>
            <Octicons name={'question'} size={26} color={'black'} />
            <Text style={styles.TextStyle}>Help Center</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReportCom')}
            style={styles.Name}>
            <Feather name={'thumbs-down'} size={26} color={'black'} />
            <Text style={styles.TextStyle}>Report a Complaint</Text>
          </TouchableOpacity>
          <View style={styles.Name}>
            <MaterialIcons name={'logout'} size={26} color={'black'} />
            <TouchableOpacity
              onPress={async () => {
                await Auth().signOut();
                navigation.navigate('LoginScreen');
                // navigation.navigate('Login');
              }}>
              <Text style={styles.TextStyle}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    height: '60%',
    width: '80%',
    borderRadius: 45,
    marginLeft: '9%',
    marginVertical: '20%',
  },
  CornerImage2: {
    height: '100%',
    width: '100%',
    // marginVertical: '2%',
    // marginLeft: '4.5%',
    borderRadius: 15,
    //flex:1
  },
  TextStyle: {
    fontSize: 20,
    marginLeft: '4%',
    // marginVertical: '1%',
    color: 'black',
    marginBottom: '2%',
  },
  TextHead: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: '5%',
    marginBottom: '3%',
  },
  Boxes1: {
    //backgroundColor: 'pink',
    flex: 0.28,
    marginTop: '15%',
    marginBottom: '7%',
    marginLeft: '4%',
  },
  Boxes2: {
    //backgroundColor: 'pink',
    flex: 0.24,
    marginLeft: '4%',
  },
  Name: {
    flexDirection: 'row',
    marginLeft: '2%',
    marginBottom: '2%',
    //backgroundColor:'blue',
    // alignContent:'center'
  },
  ImageCon: {
    height: '95%',
    width: '90%',
    marginVertical: '2%',
    marginLeft: '4.5%',
    borderRadius: 25,
    backgroundColor: 'white',
    elevation: 20,
  },
});
