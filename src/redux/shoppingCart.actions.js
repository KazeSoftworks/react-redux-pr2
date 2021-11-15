import { shoppingCartActions } from './shoppingCart.reducer';

export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch('API', {});
			if (!response.ok) {
				throw new Error('Could not fetch cart data!');
			}
			const data = await response.json();
			return data;
		};

		try {
			const cartData = await fetchData();
			dispatch(shoppingCartActions.replaceCart(cartData));
		} catch (err) {
			dispatch(
				shoppingCartActions.showNotification({
					status: 'error',
					title: 'Error',
					message: 'Sending cart data failed',
				})
			);
		}
	};
};
export const sendCartData = ({ cartItems, totalQuantity }) => {
	return async (dispatch) => {
		dispatch(
			shoppingCartActions.showNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data to server...',
			})
		);

		const sendRequest = async () => {
			const response = await fetch('API', {
				method: 'PUT',
				body: JSON.stringify({ cartItems, totalQuantity }),
			});
			if (!response.ok) {
				throw new Error('Cart data error');
			}
		};

		try {
			await sendRequest();
			dispatch(
				shoppingCartActions.showNotification({
					status: 'success',
					title: 'Success',
					message: 'Cart data was sent',
				})
			);
		} catch (error) {
			dispatch(
				shoppingCartActions.showNotification({
					status: 'error',
					title: 'Error',
					message: 'Sending cart data failed',
				})
			);
		}
	};
};
