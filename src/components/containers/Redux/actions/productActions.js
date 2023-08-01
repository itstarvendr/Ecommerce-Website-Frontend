import axios from 'axios';

// Action Types
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';

// Action Creators
export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const deleteProductSuccess = (productId) => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: productId,
  };
};

export const deleteProductFailure = (error) => {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: error,
  };
};

export const addProductSuccess = (product) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const addProductFailure = (error) => {
  return {
    type: ADD_PRODUCT_FAILURE,
    payload: error,
  };
};

// Async Action for fetching products from API
export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get('https://my-json-server.typicode.com/your-username/ecommerce-api/products')
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};

// Async Action for deleting a product
export const deleteProduct = (productId) => {
  return (dispatch) => {
    axios
      .delete(`https://my-json-server.typicode.com/your-username/ecommerce-api/products/${productId}`)
      .then(() => {
        dispatch(deleteProductSuccess(productId));
      })
      .catch((error) => {
        dispatch(deleteProductFailure(error.message));
      });
  };
};

// Async Action for adding a product
export const addProduct = (product) => {
  return (dispatch) => {
    axios
      .post('https://my-json-server.typicode.com/your-username/ecommerce-api/products', product)
      .then((response) => {
        dispatch(addProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addProductFailure(error.message));
      });
  };
};
