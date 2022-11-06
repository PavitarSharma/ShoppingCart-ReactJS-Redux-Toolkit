import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = "https://dummyjson.com/products";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (category) => {
    let link = `${baseURL}`

    if(category) {
      link = `${baseURL}?category=${category}`
    }
    const res = await axios.get(link);
    const data = await res.data;
    return data;
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/${id}`);
      console.log(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);




const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {},
    status: STATUSES.IDLE,
  },
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(getProduct.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })

      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.product = action.payload;
      });
  },
});

export const { handlePriceFilter, handleSearchProducts } = productSlice.actions;
export default productSlice.reducer;
