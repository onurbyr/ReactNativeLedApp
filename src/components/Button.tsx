import React from 'react';
import {
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
  ViewStyle,
} from 'react-native';
import {Color} from '../types/Color';

interface Props extends TouchableOpacityProps {
  icon?: React.ReactNode;
  buttonColor?: Color;
  textColor?: Color;
  containerStyle?: ViewStyle;
  title: string;
}

export const Button: React.FC<Props> = props => {
  return (
    <TouchableOpacity
      style={[props.containerStyle, styles(props).buttonContainer]}>
      {props.icon}
      <Text style={styles(props).buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (props: Props) =>
  StyleSheet.create({
    buttonContainer: {
      backgroundColor: props.buttonColor || '#272727',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 20,
    },
    buttonText: {
      marginLeft: 5,
      fontSize: 16,
      color: props.textColor || 'white',
    },
  });
