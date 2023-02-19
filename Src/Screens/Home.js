import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {style} from '../Utils/Style';
import lightTheme from '../Utils/Theme';
import {height, width} from '../Utils/Layouts';
import auth from '@react-native-firebase/auth';
import {onNavigate} from '../Networking/Services';
import {allavailableCarsData} from '../../App';
import Flatlist from '../Components/Flatlist';
const Home = ({navigation}) => {
  const [CircleAnimated, setCircleAnimated] = useState(
    new Animated.ValueXY({x: 500, y: 500}),
  );
  const [lefttoggle, setlefttoggle] = useState(
    new Animated.ValueXY({x: 600, y: 500}),
  );
  const carsCollection = useContext(allavailableCarsData);
  useEffect(() => {
    Animated.timing(CircleAnimated, {
      toValue: {x: width - 100, y:100},
      easing: Easing.bounce,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      onMovingLeft();
    });
  }, [CircleAnimated]);

  const onMovingLeft = () => {
    Animated.timing(lefttoggle, {
      toValue: {x: 0, y:1},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={style.safeArea_Container}>
      <View style={{height: '20%'}}>
        <TouchableOpacity
          onPress={() => auth().signOut()}
          style={{height: '40%'}}>
          <Text
            style={{...styles.label, textAlign: 'right', top: 10, right: 10}}>
            SignOut
          </Text>
        </TouchableOpacity>
        <Animated.View style={{...styles.tottleColBox, right: lefttoggle.x,opacity:lefttoggle.y}}>
          <Text style={{...styles.label, fontSize: 20}}>
            {carsCollection?.length}
          </Text>
          <Text
            style={{...styles.label, fontSize: 13, top: 5, fontWeight: '300'}}>
            Number of Register Car
          </Text>
        </Animated.View>
      </View>
      <View
        style={{
          ...style.Container,
          backgroundColor: lightTheme.white,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => {
            onNavigate(navigation, 'AddCar');
          }}>
          <Animated.View
            style={{
              ...styles.animatedView,
              width: CircleAnimated.x,
              height: CircleAnimated.y,
            }}>
            <Text style={styles.label}>Add A New Car</Text>
          </Animated.View>
        </TouchableOpacity>
        <View
          style={{
            height: '60%',
            width: '90%',
            alignSelf: 'center',
          }}>
          <Flatlist data={carsCollection} navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  animatedView: {
    alignSelf: 'center',
    backgroundColor: lightTheme.themeColor,
    borderRadius: 20,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    color: lightTheme.white,
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  tottleColBox: {
    height: '60%',
    borderWidth: 1,
    borderColor: lightTheme.white,
    bottom: 20,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 5,
  },
});
