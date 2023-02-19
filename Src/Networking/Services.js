import axios from 'axios';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export async function login(token) {
  const options = {
    method: 'GET',
    url: `https://staging.canonms.online/api/V1/draft_documents`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.request(options);
}
export const onSign_In = async (email, Password) => {
  return auth().signInWithEmailAndPassword(email, Password);
};

export const onSign_UP = async (email, Password) => {
  return auth().createUserWithEmailAndPassword(email, Password);
};

export const onNavigate = async (navigation, route) => {
  return navigation.navigate(route);
};

export const referense = firestore().collection('Cars');
