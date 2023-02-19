import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import lightTheme from '../../Utils/Theme';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const Actions = () => {
  return (
    <View>
      <Text>Actions</Text>
    </View>
  );
};

export const DeleteButton = ({onClick}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{...styles.minButton, backgroundColor: lightTheme.lightGrey}}>
      <FontAwesome5Icon name="trash" color={lightTheme.red} />
    </TouchableOpacity>
  );
};

export const UpdateButton = ({onClick}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        ...styles.minButton,
        backgroundColor: lightTheme.lightGrey,
        left: 20,
      }}>
      <FontAwesome5Icon name="pen" color={lightTheme.themeColor} />
    </TouchableOpacity>
  );
};
export default Actions;

const styles = StyleSheet.create({
  minButton: {
    height: 26,
    width: 26,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
