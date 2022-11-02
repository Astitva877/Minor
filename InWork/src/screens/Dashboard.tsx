import React from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Card from '../components/Card';

const Dashboard = () => {
  const DATA = [
    {
      id: '1',
      title: 'Soda Set Repair',
      userName: 'Kamal',
      address: '104, New Tilak Nagar Vijay Nagar Indore Madhya Pradesh',
      datePosted: '24 Oct',
      totalApplied: '24',
      amount: '500',
    },
    {
      id: '2',
      title: 'Soda Set Repair',
      userName: 'Chinmay',
      address: '104, New Tilak Nagar',
      datePosted: '24 Oct',
      totalApplied: '24',
      amount: '500',
    },
    {
      id: '3',
      title: 'Soda Set Repair',
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
      <View style={{flex: 0.1}}>
        <Text>Header</Text>
      </View>
      <View style={{flex: 0.9}}>
        <Text>searchBar</Text>
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
});
