import {AxiosProps, requestApi} from '../../../../apiConfig/axios';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
// @ts-ignore

import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import {AddProductInfo} from '../../../../types';
import { addProductError, addProductSuccess, callAddProduct } from '../../slice/AddProducts';

function* addProduct(
  action: PayloadAction<AddProductInfo>,
): SagaReturnType<any> {
  try {
    const payload = action.payload;
    const requestParams: AxiosProps = {
      type: 'POST',
      url: '/products',
      params: payload,
    };
    const response: AxiosResponse = yield call(requestApi, requestParams);
    if (response) {
      yield put(addProductSuccess(response));
    } else {
      yield put(addProductError(response));
    }
  } catch (error) {
    yield put(addProductError(error));
  }
}

export default function* watchAddProduct() {
  yield takeLatest(callAddProduct, addProduct);
}
