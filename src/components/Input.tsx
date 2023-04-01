import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  icon: React.ReactNode;
}

export const Input: React.FC<Props> = props => {
  const initialState = {
    borderColor: '#3C3E40',
  };
  const [borderColor, setBorderColor] = useState<string>(
    initialState.borderColor,
  );
  return (
    <View style={[styles.textInputContainer, {borderColor}]}>
      <View style={styles.iconContainer}>{props.icon}</View>
      <TextInput
        {...props}
        style={[props.style, styles.textInput]}
        onFocus={e => [setBorderColor('#7EA6C5'), props.onFocus?.(e)]}
        onBlur={e => [
          setBorderColor(initialState.borderColor),
          props.onBlur?.(e),
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: '#272B2C',
    borderRadius: 5,
  },
  iconContainer: {
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});
