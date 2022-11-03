import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";
const initialState = {
  arrProduct: [],
  productDetail: {
  },
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductApiAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getProductDetailAction: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export const { getProductApiAction, getProductDetailAction } =
  productReducer.actions;

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
    dispatch(getProductDetailAction(result.data.content));
  };
};
