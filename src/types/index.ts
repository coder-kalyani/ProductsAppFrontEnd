export interface GetAllProductsInfo {
  isGetAllProductsLoading: boolean;
  getAllProductsSuccess?: GetAllProductsSuccess;
  getAllProductsError?: GetAllProductsError;
}
export interface GetAllProductsSuccess {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
[];
export interface GetAllProductsError {
    error: string
}
export interface AddProductInfo {
    isAddProductLoading: boolean;
    addProductPayload?: AddProductPayload;
    addProductSuccess?: AddProductSuccess;
    addProductError?: AddProductError;
}
export interface AddProductPayload {
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
export interface AddProductSuccess {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
export interface AddProductError {
    error: string;
}
