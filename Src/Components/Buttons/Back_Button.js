import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import lightTheme from '../../Utils/Theme'


const Back_Button = ({navigation}) => {

  return (
    <TouchableOpacity
    onPress={()=>{navigation.goBack()}}
    >
    <FontAwesome5Icon
    name='arrow-left'
    color={lightTheme.white}
    style={{left:40,top:20}}
    size={20}
    />
    </TouchableOpacity>
  )
}

export default Back_Button

const styles = StyleSheet.create({})