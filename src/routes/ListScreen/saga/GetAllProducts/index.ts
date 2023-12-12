import {AxiosProps, requestApi} from '../../../../apiConfig/axios';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
// @ts-ignore

import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import {GetAllProductsInfo} from '../../../../types';
import { callGetAllProducts, getAllProductsError, getAllProductsSuccess } from '../../slice/GetAllProducts';

function* getAllProducts(
  action: PayloadAction<GetAllProductsInfo>,
): SagaReturnType<any> {
  try {
    const requestParams: AxiosProps = {
      type: 'GET',
      url: '/products',
    };
    const response: AxiosResponse = yield call(requestApi, requestParams);
    if (response) {
      yield put(getAllProductsSuccess(response));
    } else {
      yield put(getAllProductsError(response));
    }
  } catch (error) {
    yield put(getAllProductsError(error));
  }
}

export default function* watchGetAllProducts() {
  yield takeLatest(callGetAllProducts, getAllProducts);
}
