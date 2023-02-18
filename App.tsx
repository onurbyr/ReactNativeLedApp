import React from 'react';
import {Text, View} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';

const App = () => {
  return (
    <RootSiblingParent>
      <View>
        <Text>App.tsx</Text>
      </View>
    </RootSiblingParent>
  );
};

export default App;
