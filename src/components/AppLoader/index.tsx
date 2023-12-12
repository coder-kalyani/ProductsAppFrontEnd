import {ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './style';

const AppLoader = () => {
  return (
    <ActivityIndicator size={'large'} color={'#000'} style={styles.loader} />
  );
};

export default AppLoader;
