import {SafeAreaView, StyleSheet, Platform} from 'react-native';
import React from 'react';
import AppNavigator from './navigation';
import EnvironmentProvider from './context/use-environment';

const App = () => {
  return (
    <EnvironmentProvider>
      <AppNavigator />
    </EnvironmentProvider>
  );
};

export default App;
