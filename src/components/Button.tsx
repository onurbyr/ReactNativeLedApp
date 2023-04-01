import React from 'react';
import {
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  icon?: React.ReactNode;
  buttonColor: string;
}

export const Button: React.FC<Props> = props => {
  return (
    <TouchableOpacity style={styles(props).buttonContainer}>
      {props.icon}
      <Text style={styles(props).buttonText}>test</Text>
    </TouchableOpacity>
  );
};

const styles = (props: Props) =>
  StyleSheet.create({
    buttonContainer: {
      backgroundColor: props.buttonColor || 'red',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 20,
    },
    buttonText: {
      marginLeft: 5,
      fontSize: 16,
    },
  });
