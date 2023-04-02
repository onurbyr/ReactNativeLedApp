import {StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../constants';
import {Input, Button} from '../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getAsyncStorageData, setAsyncStorageData} from '../helpers';

const IpAddress = () => {
  const [text, onChangeText] = useState<string>('192.168.x.x');

  useEffect(() => {
    setIpAddress();
  }, []);

  const setIpAddress = async () => {
    const savedIpAddress = await getAsyncStorageData('@ipAddress');
    if (savedIpAddress) {
      onChangeText(savedIpAddress);
    }
  };

  const onSavePress = async (): Promise<void> => {
    await setAsyncStorageData('@ipAddress', text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionText}>Ip Address</Text>
        <Input
          icon={<MaterialIcons name="link" size={20} color="white" />}
          onChangeText={onChangeText}
          value={text}
        />
        <Button
          icon={<MaterialIcons name="save" size={20} color="white" />}
          containerStyle={styles.buttonStyle}
          title="Kaydet"
          onPress={onSavePress}
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
  buttonStyle: {
    marginTop: 20,
  },
});
