import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants';
import ColorPicker from 'react-native-wheel-color-picker';
import {
  convertToRGB,
  getObjectAsyncStorageData,
  setObjectAsyncStorageData,
} from '../helpers';
import {setColor} from '../api/requests';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './Navigator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = NativeStackScreenProps<RootStackParamList, 'ColorScreen'>;

const ColorScreen = ({navigation, route}: Props) => {
  const [selectedColor, setSelectedColor] = useState<string>('#ffffff');

  const onColorChangeComplete = (val: string) => {
    setSelectedColor(val);
    const rgbVal = convertToRGB(val);
    setColor(rgbVal?.r!, rgbVal?.g!, rgbVal?.b!);
  };

  const saveColorToStorage = async () => {
    let savedColors = await getObjectAsyncStorageData('savedColors');
    if (savedColors?.length) {
      savedColors.push(selectedColor);
    } else {
      savedColors = [selectedColor];
    }
    setObjectAsyncStorageData('savedColors', savedColors);
    navigation.navigate('MainScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ColorPicker onColorChangeComplete={onColorChangeComplete} />
      {route.params?.saveColor ? (
        <View style={styles.selectedColorContainer}>
          <Text style={styles.selectedColorText}>Selected Color:</Text>
          <TouchableOpacity
            style={[
              styles.selectedColorButton,
              {backgroundColor: selectedColor},
            ]}
            onPress={saveColorToStorage}>
            <MaterialIcons name="check" size={20} color="black" />
          </TouchableOpacity>
        </View>
      ) : null}
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
  selectedColorContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedColorText: {
    color: colors.mainTextColor,
    marginRight: 10,
  },
  selectedColorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#8a8180',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
