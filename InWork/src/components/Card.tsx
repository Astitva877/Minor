import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface propTypes {
  title: string;
  userName: string;
  amount: string;
  address: string;
  datePosted: string;
  totalApplied: string;
}

const Card = (props: propTypes) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageView}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.middleView}>
        <View style={styles.upperMiddleView}>
          <Text style={styles.titleStyle} numberOfLines={1}>
            {props.title}
          </Text>
          <Text style={styles.nameStyle} numberOfLines={1}>
            {props.userName}
          </Text>
          <Text style={styles.nameStyle} numberOfLines={1}>
            {props.address}
          </Text>
        </View>
        <View style={styles.lowerMiddleView}>
          <Text style={styles.amountStyle}>₹{props.amount}</Text>
        </View>
      </View>
      <View style={styles.endView}>
        <View style={styles.upperEndView}>
          <Text style={styles.textStyle}>Posted on {props.datePosted}</Text>
          <Text style={styles.textStyle}>
            {props.totalApplied} People Applied
          </Text>
        </View>
        <View style={styles.lowerEndView}>
          <MaterialCommunityIcons
            name={'arrow-right'}
            size={24}
            color={'#000000'}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
const styles = StyleSheet.create({
  card: {
    height: 100,
    width: '94%',
    elevation: 3,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  imageStyle: {
    height: '90%',
    width: '80%',
  },
  imageView: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleView: {
    width: '41%',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  upperMiddleView: {
    width: '100%',
    height: '68%',
  },
  titleStyle: {fontSize: 18, color: '#000000'},
  nameStyle: {fontSize: 12, color: '#7b7d80'},
  lowerMiddleView: {
    width: '100%',
    height: '22%',
  },
  amountStyle: {fontSize: 15, color: '#1C1C1C'},
  endView: {
    width: '29%',
    height: '100%',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  upperEndView: {
    width: '100%',
    height: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textStyle: {fontSize: 10, color: '#7b7d80'},
  lowerEndView: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
  },
  // cardholder:{
  //   fontSize:10,
  //   color:'#000000',
  //    },
});
