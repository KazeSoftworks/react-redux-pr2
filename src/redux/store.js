import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './shoppingCart.reducer';

export const store = configureStore({
	reducer: { shoppingCart: shoppingCartReducer },
	devTools: process.env.NODE_ENV !== 'production',
});
