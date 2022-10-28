import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Card from '../components/Card';
const Dashboard = () => {
  return (
    <View>
      <Card>
        <Text style={styles.cardholder}>Dashboard</Text>
      </Card>
    </View>
  );
};


export default Dashboard;
const styles = StyleSheet.create({
  cardholder: {
    fontSize:1000,
    color: '#000000',
  },
});
