const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      // state.push(action.payload);
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
       
      }
    },

    incrementQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if(item.quantity < 10) {
        item.quantity++;
      }else {
        alert("You can not accessed more than 10")
      }
    },

    decrementQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      console.log(item);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    removeItem(state, action) {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});

export const { addToCart, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
