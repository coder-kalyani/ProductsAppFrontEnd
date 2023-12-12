import { View, Pressable, Text, StatusBar } from "react-native";
import React from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
import * as RootNavigation from "../../navigation/rootNavigation";

export interface HeaderProp {
  isBack: boolean;
  title?: string;
  headerstyles?: any;
}
const AppHeader = ({ isBack, title, headerstyles }: HeaderProp) => {
  return (
    <>
    <View style={[styles.row, headerstyles]}>
      {isBack && (
        <Pressable onPress={() => RootNavigation.goBack()}>
          <Icon size={20} name={"arrow-left"} color={'#000'} style={styles.svg}/>
        </Pressable>
      )}
      {title && <Text style={styles.text}>{title}</Text>}
    </View>
    </>
  );
};

export default AppHeader;
