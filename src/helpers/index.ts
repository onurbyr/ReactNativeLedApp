import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-root-toast';

export const setAsyncStorageData = async (
  storage_Key: string,
  value: string,
) => {
  try {
    await AsyncStorage.setItem(storage_Key, value);
    Toast.show('Successfully Saved');
  } catch (e) {
    console.warn(e);
  }
};

export const getAsyncStorageData = async (storage_Key: string) => {
  try {
    const value = await AsyncStorage.getItem(storage_Key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.warn(e);
  }
};

export const convertToRGB = (val: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(val);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
