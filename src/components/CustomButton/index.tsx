import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './style';

export interface CustomButtonProp {
    title: string;
    onPress: () => void;
}

const CustomButton = ({title, onPress}: CustomButtonProp) => {
  return (
    <Pressable onPress={onPress} style={styles.btnContainer}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton;