import {RootState} from '../../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  AddProductInfo,AddProductPayload,AddProductSuccess,AddProductError
} from '../../../../types';

export const initialState: AddProductInfo = {
  isAddProductLoading: false,
  addProductPayload: undefined,
  addProductSuccess: undefined,
  addProductError: undefined,
};

export const addProductSlice = createSlice({
  name: 'addProduct',
  initialState,
  reducers: {
    callAddProduct: (state, action: PayloadAction<AddProductPayload>) => {
      state.addProductPayload  = action.payload;
      state.isAddProductLoading = true;
    },
    addProductSuccess: (
      state,
      action: PayloadAction<AddProductSuccess>,
    ) => {
      state.addProductSuccess = action.payload;
      state.isAddProductLoading = false;
    },
    addProductError: (
      state,
      action: PayloadAction<AddProductError>,
    ) => {
      state.addProductError = action.payload;
      state.isAddProductLoading = false;
    },
    clearAddProduct: state => {
      state.isAddProductLoading = false;
      state.addProductError = undefined;
      state.addProductSuccess = undefined;
      state.addProductPayload = undefined;
    },
  },
});

export const {
  callAddProduct, addProductError, addProductSuccess, clearAddProduct
} = addProductSlice.actions;

export const addProductInfo = (state: RootState) => state.addProduct;

const addProductReducer = addProductSlice.reducer;
export default addProductReducer;
