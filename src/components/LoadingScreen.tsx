import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

export const LoadingScreen: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.mainBackgroundColor,
      }}>
      <ActivityIndicator />
    </View>
  );
};
