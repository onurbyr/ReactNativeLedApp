import {StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants';
import {ItemContainer, Input} from '../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const IpAddress = () => {
  const [text, onChangeText] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ItemContainer style={styles.ipAddressContainer}>
          <Text>IpAddress</Text>
          <Input
            icon={<MaterialIcons name="link" size={20} color="white" />}
            onChangeText={onChangeText}
            value={text}
          />
        </ItemContainer>
      </View>
    </SafeAreaView>
  );
};

export default IpAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
    justifyContent: 'center',
  },
  content: {
    padding: 20,
  },
  ipAddressContainer: {
    padding: 10,
  },
});
