import {combineReducers} from '@reduxjs/toolkit';
import getAllProductsReducer from '../../routes/ListScreen/slice/GetAllProducts';
import addProductReducer from '../../routes/AddProductScreen/slice/AddProducts';
const rootReducer = combineReducers({
  getAllProducts: getAllProductsReducer,
  addProduct: addProductReducer,
});
export default rootReducer;
