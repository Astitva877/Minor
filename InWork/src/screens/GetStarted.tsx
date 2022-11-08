import React from 'react';
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native';
import ButtonFormat from '../components/ButtonFormat';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assests/splash.png')}
      resizeMode="cover">
      <View style={styles.upperView}>
        <View style={styles.upperInsideView}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Image
            source={require('../assests/InWorkLogoWhite.png')}
            style={styles.logoStyle}
          />
        </View>
      </View>
      <View style={styles.lowerView}>
        <ButtonFormat
          buttonStyle={styles.forwardButton}
          onpress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.startedText}>Get Started</Text>
          <Image
            source={require('../assests/right-arrow.png')}
            style={styles.arrowStyle}
          />
        </ButtonFormat>
      </View>
    </ImageBackground>
  );
};
export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperView: {flex: 0.8},
  upperInsideView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginTop: '12%',
    //backgroundColor:'red'
  },
  welcomeText: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  logoStyle: {height: '18%', width: '85%'},
  lowerView: {flex: 0.2, alignItems: 'center'},
  forwardButton: {
    height: '40%',
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  startedText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#063a8d',
    marginRight: 5,
  },
  arrowStyle: {height: '40%', width: '10%'},
});
