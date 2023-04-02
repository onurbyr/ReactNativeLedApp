import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorageData = async (
  storage_Key: string,
  value: string,
) => {
  try {
    await AsyncStorage.setItem(storage_Key, value);
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
