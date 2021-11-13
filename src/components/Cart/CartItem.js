import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { shoppingCartActions } from '../../redux/shoppingCart.reducer';

const CartItem = (props) => {
	const { title, quantity, total, price } = props.item;
	const dispatch = useDispatch();

	const handleAdd = (title, quantity, total, price) => {
		dispatch(shoppingCartActions.addItem({ title, quantity, total, price }));
	};

	const handleRemove = (title, quantity, total, price) => {
		dispatch(shoppingCartActions.removeItem({ title, quantity, total, price }));
	};

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{' '}
					<span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={() => handleRemove(title, quantity, total, price)}>
						-
					</button>
					<button onClick={() => handleAdd(title, quantity, total, price)}>
						+
					</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
