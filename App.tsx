import React from 'react';
import {RootSiblingParent} from 'react-native-root-siblings';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/screens/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootSiblingParent>
        <Navigator />
      </RootSiblingParent>
    </NavigationContainer>
  );
};

export default App;
