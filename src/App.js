import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCartData, sendCartData } from './redux/shoppingCart.actions';

let isInitial = true;

function App() {
	const { showCart, cartItems, totalQuantity, changed } = useSelector(
		(state) => state.shoppingCart
	);

	const { notification } = useSelector((state) => state.shoppingCart);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
		if (changed) {
			dispatch(sendCartData({ cartItems, totalQuantity }));
		}
	}, [cartItems, totalQuantity, changed, dispatch]);

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
