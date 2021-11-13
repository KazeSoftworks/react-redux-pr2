import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		title: 'Alpha',
		price: 6.99,
		description: 'This is a first product - amazing!',
	},
	{
		title: 'Beta',
		price: 7.99,
		description: 'Beta product',
	},
	{
		title: 'Charlie',
		price: 10.8,
		description: 'This is the charlie product, not that great',
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			{DUMMY_PRODUCTS.map((product) => (
				<ul>
					<ProductItem
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				</ul>
			))}
		</section>
	);
};

export default Products;
