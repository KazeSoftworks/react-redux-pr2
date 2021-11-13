import { createSlice } from '@reduxjs/toolkit';

const initialState = { showCart: false, cartItems: [], totalQuantity: 0 };

const shoppingCartSlice = createSlice({
	name: 'shoppingCart',
	initialState,
	reducers: {
		toggleCart: (state) => {
			state.showCart = !state.showCart;
		},
		addItem: (state, action) => {
			const cartItem = state.cartItems.find(
				(item) => item.title === action.payload.title
			);
			state.totalQuantity += 1;
			if (cartItem) {
				cartItem.quantity += 1;
				cartItem.total = cartItem.quantity * cartItem.price;
			} else {
				state.cartItems.push({
					...action.payload,
					quantity: 1,
					total: action.payload.price,
				});
			}
		},
		removeItem: (state, action) => {
			const cartItem = state.cartItems.find(
				(item) => item.title === action.payload.title
			);
			if (cartItem) {
				state.totalQuantity -= 1;
				if (cartItem.quantity === 1) {
					state.cartItems.splice(state.cartItems.indexOf(cartItem), 1);
				} else {
					cartItem.quantity -= 1;
					cartItem.total = cartItem.quantity * cartItem.price;
				}
			}
		},
	},
});

export const shoppingCartActions = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
