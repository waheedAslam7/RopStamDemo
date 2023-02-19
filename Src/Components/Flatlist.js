import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import React from 'react';
import lightTheme from '../Utils/Theme';
import {DeleteButton, UpdateButton} from './Buttons/Actions';
import {referense} from '../Networking/Services';

const Flatlist = ({data, navigation}) => {


    //deleting item from collections
  const onDelete = item => {
    referense
      .doc(item?.id)
      .delete()
      .then(() => {
        Alert.alert('Success', 'item Deleted');
      });
  };


  //go to upate page  to update item
  const onUpdate = item => {
    navigation?.navigate('AddCar', item);
  };


  //render flatlist item 
  const renderItem = item => {
    return (
      <View style={styles.items}>
        <View style={styles.itemView}>
          <Text style={styles.Text}>Type</Text>
          <Text style={{...styles.Text, left: 20, width: null}}>
            {item?.details?.type}
          </Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.Text}>Model No</Text>
          <Text style={{...styles.Text, left: 20, width: null}}>
            {item?.details?.modelNo}
          </Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.Text}>Color</Text>
          <Text style={{...styles.Text, left: 20, width: null}}>
            {item?.details?.color}
          </Text>
        </View>

        <View style={styles.itemView}>
          <Text style={styles.Text}>IMEI NO</Text>
          <Text style={{...styles.Text, left: 20, width: null}}>
            {item?.details?.ImmeNo}
          </Text>
        </View>

        <View style={styles.itemView}>
          <Text style={styles.Text}>Registration No</Text>
          <Text style={{...styles.Text, left: 20, width: null}}>
            {item?.details?.regNo}
          </Text>
        </View>

        <View style={{...styles.itemView, alignItems: 'center'}}>
          <Text style={styles.Text}>Actions</Text>
          <View style={{...styles.itemView, left: 20}}>
            <DeleteButton
              onClick={() => {
                onDelete(item);
              }}
            />
            <UpdateButton
              onClick={() => {
                onUpdate(item);
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{height: 40}} />}
      renderItem={({item}) => {
        const {_data} = item;
        return renderItem(_data);
      }}
    />
  );
};

export default Flatlist;

const styles = StyleSheet.create({
  items: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: lightTheme.lightGrey,
  },
  itemView: {flexDirection: 'row', justifyContent: 'flex-start', padding: 10},
  Text: {color: lightTheme.black, fontWeight: 'bold', width: '40%'},
});
