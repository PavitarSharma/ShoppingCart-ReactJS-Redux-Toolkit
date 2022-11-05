import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    price: 1500,
    rating: 5,
    discount: 20,
    category: []
  },
  reducers: {
    setPriceFilter: (state, action) => {
      state.price = Math.max(0, action.payload);
    },

    setRatingFilter: (state, action) => {
        state.rating = Math.max(0, action.payload)
    },

    setDiscountFilter: (state, action) => {
        state.discount = Math.max(0, action.payload)
    },

    setCategoryFilter: (state, action) => {
        state.category.push(action.payload)
    }
  },
});

export const actions = {
  ...filterSlice.actions,
};

export const { setPriceFilter,  setRatingFilter, setDiscountFilter, setCategoryFilter } = filterSlice.actions

export default filterSlice.reducer;
