import {View, Pressable, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';
import * as RootNavigation from '../../navigation/rootNavigation';
import routes from '../../routes';
import {useRoute} from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';
import allString from '../../constants/strings';

const DetailsScreen = () => {
  const route = useRoute();
  const name = route?.params?.name;
  const description = route?.params?.description;
  const price = route?.params?.price;
  const image = route?.params?.image;
  const category = route?.params?.category;
  return (
    <View style={styles.container}>
      <AppHeader isBack={true} title={allString.productDetails} />
      <View style={styles.card}>
        {image && <Image source={{uri: image}} style={styles.image} />}
        <>
          <View style={styles.row}>
            <View style={styles.flex1}>
              <Text style={styles.titles}>{allString.title}</Text>
            </View>
            <View style={styles.flex2}>
              <Text style={styles.title}>{name}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.flex1}>
              <Text style={styles.titles}>{allString.description}</Text>
            </View>
            <View style={styles.flex2}>
              <Text style={styles.title}>{description}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.flex1}>
              <Text style={styles.titles}>{allString.category}</Text>
            </View>
            <View style={styles.flex2}>
              <Text style={styles.title}>{category}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.flex1}>
              <Text style={styles.titles}>{allString.price}</Text>
            </View>
            <View style={styles.flex2}>
              <Text style={styles.description}>{`Rs. ${price}`}</Text>
            </View>
          </View>
        </>
      </View>
    </View>
  );
};

export default DetailsScreen;
