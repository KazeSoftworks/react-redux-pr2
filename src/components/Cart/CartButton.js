import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { shoppingCartActions } from '../../redux/shoppingCart.reducer';

const CartButton = (props) => {
	const dispatch = useDispatch();

	const handleToggleCart = () => {
		dispatch(shoppingCartActions.toggleCart());
	};

	const { cartItems, totalQuantity } = useSelector(
		(state) => state.shoppingCart
	);

	return (
		<button className={classes.button} onClick={handleToggleCart}>
			<span>My Cart</span>
			{cartItems.length > 0 && (
				<span className={classes.badge}>{totalQuantity}</span>
			)}
		</button>
	);
};

export default CartButton;
