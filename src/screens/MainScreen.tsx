import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {colors} from '../constants';
import {ItemContainer} from '../components';
import {Image, TouchableOpacity} from 'react-native';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topButtons}>
        <TouchableOpacity>
          <ItemContainer style={styles.colorIpButtonContainer}>
            <Image
              style={styles.colorIpButton}
              source={require('../assets/images/color-circle.png')}
            />
          </ItemContainer>
        </TouchableOpacity>
        <TouchableOpacity>
          <ItemContainer style={styles.onOffButtonContainer}>
            <Image
              style={styles.onOffButton}
              source={require('../assets/images/idea.png')}
            />
          </ItemContainer>
        </TouchableOpacity>
        <TouchableOpacity>
          <ItemContainer style={styles.colorIpButtonContainer}>
            <Image
              style={styles.colorIpButton}
              source={require('../assets/images/ip-address.png')}
            />
          </ItemContainer>
        </TouchableOpacity>
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
    marginVertical: 30,
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
});
