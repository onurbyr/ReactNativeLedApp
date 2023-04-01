import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {colors} from '../constants';

const ColorPicker = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ColorPicker</Text>
    </SafeAreaView>
  );
};

export default ColorPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
  },
});
