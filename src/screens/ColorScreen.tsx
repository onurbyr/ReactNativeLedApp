import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {colors} from '../constants';
import ColorPicker from 'react-native-wheel-color-picker';
import {convertToRGB} from '../helpers';
import {setColor} from '../api/requests';

const ColorScreen = () => {
  const onColorChange = (val: string) => {
    const rgbVal = convertToRGB(val);
    setColor(rgbVal?.r!, rgbVal?.g!, rgbVal?.b!);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ColorPicker onColorChange={onColorChange} />
    </SafeAreaView>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
    padding: 20,
  },
});
