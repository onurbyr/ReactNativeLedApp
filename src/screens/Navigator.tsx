import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import IpAddress from './IpAddress';
import ColorScreen from './ColorScreen';
import {getAsyncStorageData} from '../helpers';
import {LoadingScreen} from '../components';
import {setAxiosBaseURL} from '../api/axios';

export type RootStackParamList = {
  MainScreen: undefined;
  IpAddress: undefined;
  ColorScreen: undefined;
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
      setAxiosBaseURL(savedIpAddress);
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
        name="ColorScreen"
        component={ColorScreen}
        options={{animation: 'slide_from_bottom'}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
