import {
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useDebugValue, useState} from 'react';
import {style} from '../Utils/Style';
import lightTheme from '../Utils/Theme';
import DropDown from '../Components/DropDown';
import CustomInput from '../Components/inputFields/Custom_Input';
import Loader_Button from '../Components/Buttons/Loader_Button';
import {referense} from '../Networking/Services';
import { carsData } from '../Utils/Constnts';
const AddCar = ({navigation, route}) => {
  const [loading, setloading] = useState(false);
  const item = route?.params;

  const [newCar_Data, setnewCar_Data] = useState({
    color: item?.details != undefined ? item?.details?.color : '',
    type: item?.details != undefined ? item?.details?.type : '',
    modelNo: item?.details != undefined ? item?.details?.modelNo : '',
    regNo: item?.details != undefined ? item?.details?.regNo : '',
    ImmeNo: item?.details != undefined ? item?.details?.ImmeNo : '',
  });
  const [newCar_validation, setnewCar_validation] = useState({
    color_Error: '',
    type_Error: '',
    modelNo_Error: '',
    regNo_Error: '',
    ImmeNo_Error: '',
  });



  //updating item from firebase collection
const onUpdate=()=>{
  referense
  .doc(item?.id)
  .update({
    details: newCar_Data,
    id: item?.id,
  })
  .then(() => {
    setloading(false);
    navigation.goBack();
    Alert.alert('Success', 'Your updated add successfully !');
  });
}


//adding new item to collections
const onAddNew=()=>{
  const ID = referense.doc().id;
  referense
  .doc(ID)
  .set({
    details: newCar_Data,
    id: ID,
  })
  .then(() => {
    setloading(false);
    navigation.goBack();
    Alert.alert('Success', 'Your responce add successfully !');
  });
}




//checking validations
  const onContinue = () => {
    if (newCar_Data.color == '') {
      setnewCar_validation({
        color_Error: 'please enter car color',
      });
    } else if (newCar_Data.modelNo == '') {
      setnewCar_validation({
        modelNo_Error: 'please enter car modelNo',
      });
    } else if (newCar_Data.regNo == '') {
      setnewCar_validation({
        regNo_Error: 'please enter car registration no',
      });
    } else if (newCar_Data.ImmeNo == '') {
      setnewCar_validation({
        ImmeNo_Error: 'please enter car imme no',
      });
    } else {
      setloading(true);
   
      if (item != undefined) {
      onUpdate()
      } else {
      onAddNew()
      }
    }
  };


  return (
    <SafeAreaView style={style.safeArea_Container}>
      <View style={{...style.Container, backgroundColor: lightTheme.white}}>
        <View style={styles.DropdownContainer}>
          <DropDown
            Data={carsData}
            label="Category"
            place_holder={'Select Car Type'}
            bg={lightTheme.lightGrey}
            val={newCar_Data?.type}
            onchange={val => {
              setnewCar_Data({
                ...newCar_Data,
                type: val,
              });
            }}
          />
        </View>

        <View style={[styles.DropdownContainer, styles.inputContainer]}>
          <CustomInput
            label={'Color'}
            onChangeValue={text => {
              setnewCar_validation({
                color_Error: '',
              });
              setnewCar_Data({
                ...newCar_Data,
                color: text,
              });
            }}
            place_holder={'Enter car color'}
            width_={'50%'}
            labelColore={lightTheme.themeColor}
            font_Weight="bold"
            val={newCar_Data?.color}
            errorMsg={newCar_validation.color_Error}
          />
          <CustomInput
            onChangeValue={text => {
              setnewCar_validation({
                modelNo_Error: '',
              });
              setnewCar_Data({
                ...newCar_Data,
                modelNo: text,
              });
            }}
            label={'Model No'}
            place_holder={'Enter car model no'}
            width_={'50%'}
            val={newCar_Data?.modelNo}
            font_Weight="bold"
            labelColore={lightTheme.themeColor}
            errorMsg={newCar_validation.modelNo_Error}
          />
        </View>
        <View style={[styles.DropdownContainer, styles.inputContainer]}>
          <CustomInput
            label={'Registration No'}
            onChangeValue={text => {
              setnewCar_validation({
                regNo_Error: '',
              });
              setnewCar_Data({
                ...newCar_Data,
                regNo: text,
              });
            }}
            place_holder={'registration no'}
            width_={'50%'}
            val={newCar_Data?.regNo}
            labelColore={lightTheme.themeColor}
            font_Weight="bold"
            errorMsg={newCar_validation.regNo_Error}
          />
          <CustomInput
            onChangeValue={text => {
              setnewCar_Data({
                ...newCar_Data,
                ImmeNo: text,
              });
              setnewCar_validation({
                ImmeNo_Error: '',
              });
            }}
            label={'IMEI No'}
            place_holder={'write here...'}
            width_={'50%'}
            font_Weight="bold"
            val={newCar_Data?.ImmeNo}
            labelColore={lightTheme.themeColor}
            errorMsg={newCar_validation.ImmeNo_Error}
          />
        </View>
        <View style={styles.DropdownContainer}>
          <Loader_Button
            isLoading={loading}
            onpress={() => {
              onContinue();
            }}
            label={item != undefined ? 'Update' : 'Continue'}
            bColor={lightTheme.themeColor}
            labelColor={lightTheme.white}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddCar;

const styles = StyleSheet.create({
  DropdownContainer: {
    height: '10%',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
  },
  inputContainer: {flexDirection: 'row', height: '15%'},
});
