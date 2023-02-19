import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import {Input} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {width} from '../../Utils/Layouts';
import lightTheme from '../../Utils/Theme';

const CustomInput = ({
  label,
  font_Weight,
  iconName,
  onChangeIcon,
  onChangeValue,
  seureText,
  contentType,
  errorMsg,
  val,
  col,
  borderCol,
  font_Size,
  place_holder,
  left_Icon,
  right_Icon,
  width_,
  labelColore
}) => {
  return (
    <Input
      value={val}
      placeholder={place_holder}
      onChangeText={e => onChangeValue(e)}
      label={label}
      errorStyle={{color: 'red'}}
      errorMessage={errorMsg}
      textContentType={contentType}
      secureTextEntry={seureText}
      keyboardType="default"
      labelStyle={{
        fontSize: font_Size || 14,
        fontWeight: font_Weight,
        bottom: 5,
        left: 10,
        color: labelColore||lightTheme.white,
      }}
        leftIcon={
          <FontAwesome5 name={left_Icon} size={20} color={lightTheme.themeColor} />
        }
      rightIcon={
        <FontAwesome5
          onPress={onChangeIcon}
          name={right_Icon}
          size={18}
          color={lightTheme.inputText}
          style={{right: 5}}
        />
      }
      inputStyle={{color: col || lightTheme.black, fontSize: 14}}
      containerStyle={{
        width:width_|| width - 30,
        alignSelf: 'center',
      }}
      inputContainerStyle={{
        borderWidth: 1.5,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: '#D7DEED',
        borderColor: borderCol || '#CECECE',
        height: 40,
        borderColor: lightTheme.lightGrey,
      }}
    />
  );
};

export default CustomInput;
