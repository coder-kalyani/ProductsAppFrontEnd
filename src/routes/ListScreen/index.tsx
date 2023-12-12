import {View, Text, Alert, FlatList, ScrollView, TextInput} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {callGetAllProducts, getAllProductsInfo} from './slice/GetAllProducts';
import AppLoader from '../../components/AppLoader';
import ProductTile from '../../components/ProductTile';
import allString from '../../constants/strings';
import CustomButton from '../../components/CustomButton';
import * as RootNavigation from '../../navigation/rootNavigation';
import routes from '../../routes';

const ListScreen = () => {
  const dispatch = useAppDispatch();
  const {isGetAllProductsLoading, getAllProductsError, getAllProductsSuccess} =
    useAppSelector(getAllProductsInfo);
  useEffect(() => {
    if (getAllProductsSuccess === undefined) {
      // calling api to get all products
      dispatch(callGetAllProducts());
    }
  }, [getAllProductsSuccess]);
  useEffect(() => {
    if (getAllProductsSuccess && getAllProductsSuccess?.status === 200) {
      console.log('products -- ', getAllProductsSuccess);
    }
    // handling errors on api response
    if (
      (getAllProductsSuccess && getAllProductsSuccess?.status !== 200) ||
      getAllProductsError
    ) {
      Alert.alert('Error while fetching products, Please try again');
    }
  }, [getAllProductsSuccess, getAllProductsError]);

  const renderItem = ({item}) => {
    return (
      <ProductTile
        name={item?.title}
        price={item?.price}
        category={item?.category}
        description={item?.description}
        image={item?.image}
      />
    );
  };

  // function to navigate add to product screen
  const addProduct = () => {
    RootNavigation.navigate(routes.AddProductScreen);
  }
  return (
    <View style={styles.container}>
      {isGetAllProductsLoading ? (
        <View style={styles.loaderStyle}>
          <AppLoader />
        </View>
      ) : (
        <ScrollView>
          {/* <TextInput placeholder= {allString?.search} style={styles.input}/> */}
          <CustomButton title={allString.addProduct} onPress={addProduct}/>
          {getAllProductsSuccess?.data ? (
            <FlatList
              data={getAllProductsSuccess?.data}
              renderItem={renderItem}
              scrollEnabled
              nestedScrollEnabled
              showsVerticalScrollIndicator
            />
          ) : (
            <Text style={styles.noTitle}>
              {'No Products available at this time'}
            </Text>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default ListScreen;
