import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, createContext, useState} from 'react';
import {StatusBar} from 'react-native';
import RootStack from './Src/Navigation/RootStack';
import lightTheme from './Src/Utils/Theme';
import {NavigationContainer} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
export const allavailableCarsData = createContext();
const App = () => {
  const [cars, setcars] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Cars')
      .onSnapshot(response => {
        setcars(response?.docs);
      });
    return () => subscriber();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor={lightTheme.themeColor}
        barStyle="light-content"
      />
      <allavailableCarsData.Provider value={cars}>
        <RootStack />
      </allavailableCarsData.Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
