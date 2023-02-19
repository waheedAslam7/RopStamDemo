import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import React, {useState} from 'react';
import lightTheme from '../Utils/Theme';

const DropDown = ({
  label,
  Data,
  onchange,
  val,
  formStatus,
  place_holder,
  bg,
  Bw,

}) => {
  const [value, setValue] = useState(null);


  const renderItem = item => {
    return (
      <TouchableOpacity
        disabled={true}
        onPress={() => {}}
        style={{
          ...styles.item,
          backgroundColor:
            item.value == 'disable'
              ? lightTheme.reject
              : item.value === value
              ? lightTheme.themeColor
              : null,
          borderRadius: 5,
        }}>
        <Text
          style={{
            ...styles.textItem,
            color:
              item.value == 'disable'
                ? lightTheme.red
                : item.value === value
                ? lightTheme.white
                : lightTheme.black,
          }}>
          {item.label}
        </Text>

        {item.value === value && (
          <Text style={{fontWeight: 'bold', color: lightTheme.white}}>✓</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      {label ? (
        <View style={{width: '100%', height: '50%'}}>
          <Text style={{fontWeight:"bold",color:lightTheme.black}}>{label}</Text>
        </View>
      ) : null}

      <Dropdown
        style={{
          ...styles.dropdown,
          backgroundColor: bg || 'white',
          borderWidth: Bw || 1.5,
        }}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={Data}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={place_holder || 'Select item'}
        searchPlaceholder="Search..."
        value={val || value}
        onChange={item => {
        
            onchange(item?.value);
            setValue(item.value);
      
        }}
        containerStyle={{
          borderWidth: 1.5,
          borderRadius: 10,
          elevation: 0,
          padding: 5,
        }}
        renderItem={ renderItem}
      />
    </>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    height: 38,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: lightTheme.lightGrey,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    color: lightTheme.black,
  },
  textItem: {
    flex: 1,
    fontSize: 12,
    color: lightTheme.black,
  },
  placeholderStyle: {
    fontSize: 14,
    left: 10,
    color: lightTheme.black,
  },
  selectedTextStyle: {
    fontSize: 12,
    left: 10,
    color: lightTheme.black,
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: lightTheme.black,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
    color: lightTheme.black,
  },
});
