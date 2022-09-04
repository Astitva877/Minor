import React from 'react';
import {Button, Text, View} from 'react-native';

const GetStarted = ({navigation}) => {
  return (
    <View>
      <Text> Hii </Text>
      <Button
        onPress={() => navigation.navigate('LoginScreen')}
        title="Learn More"
        color="#841584"
      />
      {/* <Image
         so
      />  */}
    </View>
  );
};
export default GetStarted;
