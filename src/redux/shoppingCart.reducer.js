import { createSlice } from '@reduxjs/toolkit';

const initialState = { showCart: false, cartItems: [] };

const shoppingCartSlice = createSlice({
	name: 'shoppingCart',
	initialState,
	reducers: {
		toggleCart: (state) => {
			state.showCart = !state.showCart;
		},
		addItem: (state, action) => {
			state.cartItems.push(action.payload);
		},
		removeItem: (state, action) => {
			state.cartItems.splice(action.payload, 1);
		},
	},
});

export const shoppingCartActions = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
