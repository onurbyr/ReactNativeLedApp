import {StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants';
import {ItemContainer, Input, Button} from '../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const IpAddress = () => {
  const [text, onChangeText] = useState<string>('192.168.x.x');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionText}>Ip Address</Text>
        <ItemContainer style={styles.ipAddressContainer}>
          <Input
            icon={<MaterialIcons name="link" size={20} color="white" />}
            onChangeText={onChangeText}
            value={text}
          />
        </ItemContainer>
        <Button
          icon={<MaterialIcons name="save" size={20} color="white" />}
          containerStyle={styles.buttonStyle}
          title="Kaydet"
        />
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
  sectionText: {
    color: colors.mainTextColor,
    marginBottom: 10,
    fontSize: 18,
  },
  ipAddressContainer: {
    padding: 10,
  },
  buttonStyle: {
    marginTop: 20,
  },
});
