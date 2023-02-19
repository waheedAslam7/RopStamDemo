import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {style} from '../Utils/Style';
import {RPLogo} from '../assets/Assets_Source';
import {height, width} from '../Utils/Layouts';
import Lottie from 'lottie-react-native';
import lightTheme from '../Utils/Theme';
const Splash = () => {
  return (
    <SafeAreaView styles={{...style.safeArea_Container,}}>
      <View style={styles.container}>
        <View style={{...styles.box,backgroundColor:lightTheme.white}}>
          <Image source={RPLogo} style={styles.LogoContainer} />
        </View>
        <View style={styles.loaderBox}>
          <Lottie
            source={require('..//assets/loading/splashLoader.json')}
            autoPlay
            loop
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: lightTheme.white,
  },
  LogoContainer: {resizeMode: 'center', height: '100%', width: '100%'},
  box: {
    height: '40%',
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
    marginTop: 100,
  },
  loaderBox: {
    height: '20%',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
});
