import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import IpAddress from './IpAddress';
import ColorPicker from './ColorPicker';

export type RootStackParamList = {
  MainScreen: undefined;
  IpAddress: undefined;
  ColorPicker: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
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
