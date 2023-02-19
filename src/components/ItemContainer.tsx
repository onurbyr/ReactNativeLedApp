import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

type Props = {
  children?: React.ReactNode;
  style?: ViewStyle;
};

export const ItemContainer: React.FC<Props> = props => {
  return (
    <View {...props} style={[props.style, styles.container]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272E3A',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
