import {all, fork} from 'redux-saga/effects';
import watchGetAllProducts from '../routes/ListScreen/saga/GetAllProducts';
import watchAddProduct from '../routes/AddProductScreen/saga/AddProducts';

export default function* rootSaga() {
  yield all([
    fork(watchGetAllProducts),
    fork(watchAddProduct),
  ]);
}
