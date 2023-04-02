import axios from 'axios';
import Toast from 'react-native-root-toast';

const errorHandling = (error: any) => {
  //Todo
  if (error.response) {
    if (error.code === 'ERR_NETWORK') {
      Toast.show('Network Error');
    } else if (error.code === 'ERR_BAD_REQUEST') {
      Toast.show('Bad Requst');
    } else if (error.code === 'ERR_BAD_RESPONSE') {
      Toast.show('Bad response');
    }
  } else {
    Toast.show(error.message);
  }
};

export async function get(params: object = {}) {
  const url: string = 'http://192.168.1.44/led';
  try {
    const response = await axios.get(url, {params});
    return response.data;
  } catch (error) {
    errorHandling(error);
  }
}
