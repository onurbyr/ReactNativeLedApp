import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {colors} from '../constants';

const IpAddress = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>IpAddress</Text>
    </SafeAreaView>
  );
};

export default IpAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
  },
});
