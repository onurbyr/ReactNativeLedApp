import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import ColorPicker from './ColorPicker';

export type RootStackParamList = {
  MainScreen: undefined;
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
      <Stack.Screen name="ColorPicker" component={ColorPicker} />
    </Stack.Navigator>
  );
};

export default Navigator;
