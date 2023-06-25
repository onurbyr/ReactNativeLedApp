import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants';
import {ItemContainer} from '../components';
import {Image, TouchableOpacity} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './Navigator';
import {setStatus} from '../api/requests';

type Props = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;

const MainScreen = ({navigation}: Props) => {
  const [brightness, setBrightness] = useState<any>(0);
  const [onOffToggle, setOnOffToggle] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('ColorScreen')}>
          <ItemContainer style={styles.colorIpButtonContainer}>
            <Image
              style={styles.colorIpButton}
              source={require('../assets/images/color-circle.png')}
            />
          </ItemContainer>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStatus(onOffToggle ? 'off' : 'on');
            setOnOffToggle(!onOffToggle);
          }}>
          <ItemContainer style={styles.onOffButtonContainer}>
            <Image
              style={styles.onOffButton}
              source={require('../assets/images/idea.png')}
            />
          </ItemContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('IpAddress')}>
          <ItemContainer style={styles.colorIpButtonContainer}>
            <Image
              style={styles.colorIpButton}
              source={require('../assets/images/ip-address.png')}
            />
          </ItemContainer>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>Brightness</Text>
        <ItemContainer style={styles.sliderContainer}>
          <MaterialIcons name="brightness-low" size={20} color="white" />
          <Slider
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={brightness}
            onValueChange={value => setBrightness(value)}
            containerStyle={styles.slider}
          />
          <MaterialIcons name="brightness-high" size={20} color="white" />
        </ItemContainer>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>Select Saved Colors</Text>
        <ItemContainer style={styles.savedColorsMainContainer}>
          <TouchableOpacity style={styles.savedColorsButton}></TouchableOpacity>
        </ItemContainer>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
  },
  topButtons: {
    flexDirection: 'row',
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorIpButtonContainer: {
    padding: 10,
    borderRadius: 25,
  },
  colorIpButton: {
    width: 30,
    height: 30,
  },
  onOffButtonContainer: {
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 20,
  },
  onOffButton: {
    width: 80,
    height: 80,
  },
  section: {
    margin: 40,
  },
  sectionText: {
    color: colors.mainTextColor,
    marginBottom: 10,
    marginLeft: 10,
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  savedColorsMainContainer: {
    padding: 20,
    borderRadius: 10,
  },
  savedColorsButton: {
    backgroundColor: 'red',
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#344055',
    borderRadius: 5,
  },
});
