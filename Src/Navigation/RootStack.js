import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Home from '../Screens/Home';
import AddCar from '../Screens/AddCar';
import { height } from '../Utils/Layouts';
const RootStack = () => {
  const [isLoading, setisLoading] = useState(true);
  const [intitalRoute, setintitalRoute] = useState('');
  const Stack = createNativeStackNavigator();

  const onAuthStateChanged=(user)=> {
    setisLoading(true)
   if(user){
    setintitalRoute("Home")
   }else{
    setintitalRoute("Login")
   }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    let timeoutVariable=setTimeout(() => {
      setisLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutVariable)
  }, [isLoading]);

  if (isLoading) return <Splash />;

  return (
    <View style={{height:height}}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'push',
        animationDuration: 1000,
      }}
      initialRouteName={intitalRoute}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddCar" component={AddCar} />
    </Stack.Navigator>
    </View> );
};

export default RootStack;

const styles = StyleSheet.create({});
