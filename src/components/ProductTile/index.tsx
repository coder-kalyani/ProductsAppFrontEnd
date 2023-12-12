import {View, Pressable, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';
import * as RootNavigation from '../../navigation/rootNavigation';
import routes from '../../routes';

export interface ProductTileProps {
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
}
const ProductTile = ({
  name,
  description,
  image,
  price,
  category,
}: ProductTileProps) => {
  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        RootNavigation.navigate(routes.DetailsScreen, {
          name: name,
          description: description,
          price: price,
          image: image,
          category: category,
        })
      }>
      <View style={styles.row}>
        {image && <Image source={{uri: image}} style={styles.image} />}
        <View style={styles.flex2}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>{`Rs. ${price}`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductTile;
