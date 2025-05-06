import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload.item);
      state.total += action.payload.price;
    },
    removeItemFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item === action.payload.item);
      if (index !== -1) {
        state.items.splice(index, 1);
        state.total -= action.payload.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
