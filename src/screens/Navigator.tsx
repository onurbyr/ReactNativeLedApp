import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import IpAddress from './IpAddress';
import ColorPicker from './ColorPicker';
import {getAsyncStorageData} from '../helpers';
import {LoadingScreen} from '../components';

export type RootStackParamList = {
  MainScreen: undefined;
  IpAddress: undefined;
  ColorPicker: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const [isThereSavedIp, setIsThereSavedIp] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    checkIpAddress();
  }, []);

  const checkIpAddress = async () => {
    const savedIpAddress = await getAsyncStorageData('@ipAddress');
    if (savedIpAddress) {
      setIsThereSavedIp(true);
    } else {
      setIsThereSavedIp(false);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isThereSavedIp ? 'MainScreen' : 'IpAddress'}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen
        name="IpAddress"
        component={IpAddress}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="ColorPicker"
        component={ColorPicker}
        options={{animation: 'slide_from_bottom'}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
