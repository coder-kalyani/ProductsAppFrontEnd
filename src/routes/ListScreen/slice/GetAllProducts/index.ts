import {RootState} from '../../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  GetAllProductsError,
  GetAllProductsInfo,
  GetAllProductsSuccess,
} from '../../../../types';

export const initialState: GetAllProductsInfo = {
  isGetAllProductsLoading: false,
  getAllProductsError: undefined,
  getAllProductsSuccess: undefined,
};

export const getAllProductsSlice = createSlice({
  name: 'getAllProducts',
  initialState,
  reducers: {
    callGetAllProducts: state => {
      state.isGetAllProductsLoading = true;
    },
    getAllProductsSuccess: (
      state,
      action: PayloadAction<GetAllProductsSuccess>,
    ) => {
      state.getAllProductsSuccess = action.payload;
      state.isGetAllProductsLoading = false;
    },
    getAllProductsError: (
      state,
      action: PayloadAction<GetAllProductsError>,
    ) => {
      state.getAllProductsError = action.payload;
      state.isGetAllProductsLoading = false;
    },
    clearGetAllProducts: state => {
      state.isGetAllProductsLoading = false;
      state.getAllProductsError = undefined;
      state.getAllProductsSuccess = undefined;
    },
  },
});

export const {
  callGetAllProducts,
  getAllProductsError,
  getAllProductsSuccess,
  clearGetAllProducts,
} = getAllProductsSlice.actions;

export const getAllProductsInfo = (state: RootState) => state.getAllProducts;

const getAllProductsReducer = getAllProductsSlice.reducer;
export default getAllProductsReducer;
