import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import lightTheme from '../Utils/Theme';
import {style} from '../Utils/Style';
import CustomInput from '../Components/inputFields/Custom_Input';
import Loader_Button from '../Components/Buttons/Loader_Button';
import {onNavigate, onSign_In} from '../Networking/Services';
const Login = ({navigation}) => {
  const [loading, setloading] = useState(false);
  const [useremail, setuseremail] = useState('');
  const [userpassword, setuserpassword] = useState('');

  const onSignin = async () => {
    if (useremail === '') {
      Alert.alert('Alert !', 'Please Enter Your UserName ');
    } else if (userpassword === '') {
      Alert.alert('Alert !', 'Please Enter Your UserPassword ');
    } else {
      setloading(true);
      onSign_In(useremail, userpassword)
        .then(response => {
          setloading(false);
          console.log(response);
        })
        .catch(error => {
          setloading(false);
          console.log(error);
        });
    }
  };
  return (
    <SafeAreaView style={style.safeArea_Container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={true}
        style={{flex: 1}}>
        <View style={style.Container}>
          <Text style={styles.logo}>Login to your account</Text>
          <View style={{alignSelf: 'center', marginTop: 50}}>
            <CustomInput
              onChangeValue={text => setuseremail(text)}
              label={'Email'}
              left_Icon={'envelope'}
              place_holder={'Enter your email'}
            />
            <CustomInput
              onChangeValue={text => setuserpassword(text)}
              label={'Password'}
              place_holder={'Enter your Password'}
              right_Icon={'eye'}
              left_Icon={'lock'}
            />
            <View style={styles.button}>
              <Loader_Button
                isLoading={loading}
                onpress={() => {
                  onSignin();
                }}
                label={'Login'}
              />
            </View>
            <Text
              onPress={() => onNavigate(navigation, 'SignUp')}
              style={{...styles.logo, fontSize: 14}}>
              Don't have an account SignUp
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    color: lightTheme.white,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 18,
    marginTop: 100,
  },
  button: {height: 40, width: '90%', alignSelf: 'center', marginTop: 10},
});
