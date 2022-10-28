import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardholder}>{props.childern}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    height:'30%',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#3bb137',
    shadowColor: '#333',
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardholder:{
    fontSize:10,
    color:'#000000',
     },
});
