import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { shoppingCartActions } from './redux/shoppingCart.reducer';

let isInitial = true;

function App() {
	const { showCart, cartItems, totalQuantity } = useSelector(
		(state) => state.shoppingCart
	);

	const { notification } = useSelector((state) => state.shoppingCart);

	const dispatch = useDispatch();

	useEffect(() => {
		const sendCartData = async () => {
			dispatch(
				shoppingCartActions.showNotification({
					status: 'pending',
					title: 'Sending...',
					message: 'Sending cart data to server...',
				})
			);
			const response = await fetch(
				'url for database', //TODO: add url
				{
					method: 'PUT',
					body: JSON.stringify({ cartItems, totalQuantity }),
				}
			);
			if (!response.ok) {
				throw new Error('Cart data error');
			}
			dispatch(
				shoppingCartActions.showNotification({
					status: 'success',
					title: 'Success',
					message: 'Cart data was sent',
				})
			);
		};

		if (isInitial) {
			isInitial = false;
			return;
		}

		sendCartData().catch((error) => {
			dispatch(
				shoppingCartActions.showNotification({
					status: 'error',
					title: 'Error',
					message: 'Sending cart data failed',
				})
			);
		});
	}, [cartItems, totalQuantity, dispatch]);

	return (
		<>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
