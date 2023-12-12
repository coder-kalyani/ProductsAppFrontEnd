import {
  View,
  Alert,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './style';
import * as RootNavigation from '../../navigation/rootNavigation';
import routes from '../../routes';
import AppHeader from '../../components/AppHeader';
import allString from '../../constants/strings';
import CustomButton from '../../components/CustomButton';
import {Modalize} from 'react-native-modalize';
import ImagePicker from 'react-native-image-crop-picker';
import {bytesToMB} from '../../utils/file';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  addProductInfo,
  callAddProduct,
  clearAddProduct,
} from './slice/AddProducts';
import AppLoader from '../../components/AppLoader';

const AddProductScreen = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const dispatch = useAppDispatch();
  const {isAddProductLoading} =
    useAppSelector(addProductInfo);

  const getDocument = async (type: string) => {
    if (type === 'libraryPhoto') {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        const sizeInMB = bytesToMB(image.size);
        if (sizeInMB <= 10) {
          setImage(image.path);
        } else {
          Alert.alert('Document size cannot be greater than 10 MB');
        }
      });
    }
  };
  const addProductDetails = () => {
    if (
      image === undefined ||
      title === undefined ||
      description === undefined ||
      category === undefined ||
      price === undefined
    ) {
      Alert.alert('Please fill all the fields');
    } else {
      const payload = {
        title: title,
        image: image,
        price: price,
        description: description,
        category: category,
      };
      dispatch(callAddProduct(payload));
      Alert.alert('Product added successfully');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView>
        {isAddProductLoading ? (
          <View style={styles.loaderStyle}>
            <AppLoader />
          </View>
        ) : (
          <>
            <AppHeader isBack={true} title={allString.addProduct} />
            <View style={styles.card}>
              <>
                {image ? (
                  <Image source={{uri: image}} style={styles.image} />
                ) : (
                  <View style={styles.circle} />
                )}
                <CustomButton
                  onPress={() => getDocument('libraryPhoto')}
                  title={allString.browseImage}
                />
                <View style={styles.row}>
                  <View style={styles.flex1}>
                    <Text style={styles.titles}>{allString.title}</Text>
                  </View>
                  <View style={styles.flex2}>
                    <TextInput
                      placeholder={allString.enterProductName}
                      style={styles.input}
                      value={title}
                      onChangeText={e => setTitle(e)}
                    />
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.flex1}>
                    <Text style={styles.titles}>{allString.description}</Text>
                  </View>
                  <View style={styles.flex2}>
                    <TextInput
                      placeholder={allString.enterProductDescription}
                      style={styles.input}
                      value={description}
                      onChangeText={e => setDescription(e)}
                    />
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.flex1}>
                    <Text style={styles.titles}>{allString.category}</Text>
                  </View>
                  <View style={styles.flex2}>
                    <TextInput
                      placeholder={allString.enterCategory}
                      style={styles.input}
                      value={category}
                      onChangeText={e => setCategory(e)}
                    />
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.flex1}>
                    <Text style={styles.titles}>{allString.price}</Text>
                  </View>
                  <View style={styles.flex2}>
                    <TextInput
                      placeholder={allString.enterPrice}
                      style={styles.input}
                      value={price}
                      keyboardType="numeric"
                      onChangeText={e => setPrice(e)}
                    />
                  </View>
                </View>
              </>
              <View style={styles.btnStyle}>
                <CustomButton
                  onPress={addProductDetails}
                  title={allString.addProduct}
                />
              </View>
            </View>
          </>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddProductScreen;
