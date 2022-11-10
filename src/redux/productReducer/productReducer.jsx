import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";
const initialState = {
  arrProduct: [],
  productDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductApiAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getProductDetailAction: (state, action) => {
      state.productDetail = { ...action.payload };
    },
    addQuantityAction: (state, action) => {
      state.productDetail.cartQuantity += 1;
    },
    decreaseQuantity: (state, action) => {
      if (state.productDetail.cartQuantity > 1) {
        state.productDetail.cartQuantity -= 1;
      }
    },
  },
});

export const {
  getProductApiAction,
  getProductDetailAction,
  addQuantityAction,
  decreaseQuantity,
} = productReducer.actions;

export default productReducer.reducer;
//Async action
export const getProductApi = () => {
  return async (dispatch) => {
    const result = await http.get("/api/product");
    const action = getProductApiAction(result.data.content);
    dispatch(action);
  };
};
export const getProduceDetailApiById = (id) => {
  return async (dispatch) => {
    const result = await http.get("api/Product/getbyid?id=" + id);
    dispatch(getProductDetailAction({...result.data.content, cartQuantity: 1}));
  };
};
