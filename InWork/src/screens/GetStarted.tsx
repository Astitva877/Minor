import React from 'react';
import {Button, Text, View, Image, StyleSheet} from 'react-native';

const GetStarted = ({navigation}) => {
  return (
    <View>
      {/* <Text> Hii </Text>
      <Button
        onPress={() => navigation.navigate('LoginScreen')}
        title="Learn More"
        color="#841584"
      /> */}
      {/* <Image
        style={styles.container}
        source={require('../assests/splash.png')}
        resizeMode="cover"
      /> */}
      <Text>
        Astitva 
      </Text>
    </View>
  );
};
export default GetStarted;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
  },
});
