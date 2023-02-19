import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import lightTheme from '../../Utils/Theme';
import { width } from '../../Utils/Layouts';
import Lottie from 
'lottie-react-native';

const Loader_Button
 = ({label, onpress, isLoading, bColor,labelColor}) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      style={{
        ...styles.cantainer,
        backgroundColor: bColor||lightTheme.white,
      }}>
      {isLoading ? (
        <Lottie
          source={require('..//..//assets/loading/loader.json')}
          autoPlay
          loop
        />
      ) : (
        <Text style={{...styles.label,color:labelColor}}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Loader_Button
;
const styles = StyleSheet.create({
  cantainer: {
    width: width - 120,
    height: 40,
    alignSelf: 'center',
    borderRadius:8
 
  },
  label: {
    textAlign: 'center',
    height: '100%',
    textAlignVertical: 'center',
    padding:10,
    fontSize: 14,
    color: lightTheme.themeColor,
    fontWeight: "bold",
  },
});
