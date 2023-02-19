import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import lightTheme from '../Utils/Theme';
import {style} from '../Utils/Style';
import CustomInput from '../Components/inputFields/Custom_Input';
import Loader_Button from '../Components/Buttons/Loader_Button';
import Back_Button from '../Components/Buttons/Back_Button';
import {onSign_UP} from '../Networking/Services';
const SignUp = ({navigation}) => {
  const [loading, setloading] = useState(false);
  const [useremail, setuseremail] = useState('');
  const [userpassword, setuserpassword] = useState('');
  const [validation_Messages, setvalidation_Messages] = useState({
    for_Email: '',
    for_password: '',
  });

  const onSign_Up = async () => {
    if (useremail === '') {
      setvalidation_Messages({
        for_Email: 'Please enter your UserName and email',
      });
    } else if (userpassword === '') {
      setvalidation_Messages({
        for_password: 'Please enter your Password',
      });
    } else {
      setloading(true);
      onSign_UP(useremail, userpassword)
        .then(response => {
          console.log(response.user)
          setloading(false);
        })
        .catch(error => {
          setloading(false);
          if (error.code === 'auth/email-already-in-use') {
            setvalidation_Messages({
              for_Email: 'That email address is already in use!',
            });
          } else if (error.code == 'auth/weak-password') {
            setvalidation_Messages({for_password: 'Your password is too weak'});
          }
          if (error.code === 'auth/invalid-email') {
            setvalidation_Messages({
              for_Email: 'That email address is invalid!',
            });
          }
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
          <Back_Button navigation={navigation} />
          <Text style={styles.logo}>Create your account</Text>
          <View style={{alignSelf: 'center', marginTop: 50}}>
            <CustomInput
              onChangeValue={text => {
                setuseremail(text)
                setvalidation_Messages({
                  for_Email:"",
                  for_password:""
                })
              }}
              label={'Email'}
              left_Icon={'envelope'}
              place_holder={'Enter your email'}
              errorMsg={validation_Messages?.for_Email}
            />
            <CustomInput
              onChangeValue={text => {
                setuserpassword(text)
                setvalidation_Messages({
                  for_Email:"",
                  for_password:""
                })
              }
              }
              label={'Password'}
              place_holder={'Enter your Password'}
              right_Icon={'eye'}
              left_Icon={'lock'}
              errorMsg={validation_Messages?.for_password}
            />
            <View style={styles.button}>
              <Loader_Button
                isLoading={loading}
                onpress={() => {
                  onSign_Up();
                }}
                label={'Create Account'}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

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
