import React, {
	useState,
	useEffect,
} from "react";
import "../style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "../components/RatingStars";
import ShoppingCart from "../components/ShoppingCart";

const products = [
	{
		id: 1,
		name: "Dog Bed",
		rating: 4.3,
		description:
			"Best Friends by Sheri The Original Calming Shag Fur Donut Cuddler Cat & Dog Bed.",
		price: 24.99,
		image: require("../assets/images/dogbed.jpg"),
	},
	{
		id: 2,
		name: "Dog Food",
		rating: 4.6,
		description:
			"Pedigree Complete Nutrition Grilled Steak & Vegetable Flavor Dog Kibble Adult Dry Dog Food.",
		price: 27.78,
		image: require("../assets/images/dogfood.jpg"),
	},
	{
		id: 3,
		name: "Cat Food",
		rating: 4.9,
		description:
			"Fancy Feast Grilled Seafood Feast Variety Pack Canned Cat Food",
		price: 18.99,
		image: require("../assets/images/catfood.jpg"),
	},
	{
		id: 4,
		name: "Cat Litter",
		rating: 4.4,
		description:
			"Fresh Step Multi-Cat Scented Clumping Clay Cat Litter.",
		price: 15.85,
		image: require("../assets/images/catlitter.jpg"),
	},
	{
		id: 5,
		name: "Dog Treats",
		rating: 4.8,
		description:
			"American Journey Salmon Recipe Grain-Free Oven Baked Biscuit Dog Treats.",
		price: 4.24,
		image: require("../assets/images/dogtreats.jpg"),
	},
	{
		id: 6,
		name: "Cat Furniture",
		rating: 4.3,
		description:
		"Frisco Cactus Cat Scratching Post",
		price: 23.99,
		image: require("../assets/images/catfurniture.jpg"),
	},
	{
		id: 7,
		name: "Dog Supplements",
		rating: 4.0,
		description:
			"Vibeful 10-in-1 Multivitamin Bites Peanut Butter Flavored Soft Chews Multivitamin for Dogs, 90 Count.",
		price: 18.99,
		image: require("../assets/images/dogsupplements.jpg"),
	},
	{
		id: 8,
		name: "Dog Toys",
		rating: 4.95,
		description:
			"Frisco Jungle Pals Plush & Rope Variety Pack Dog Toy, 6 count.",
		price: 11.98,
		image: require("../assets/images/dogtoys.jpg"),
	}
];

function Store() {
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (
		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar">
				{/* <h3 className="logo">Animal Store</h3> */}
				<button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>
					<GiShoppingBag size={24} />
					{productsInCart.length >
						0 && (
						<span className="product-count">
							{
								productsInCart.length
							}
						</span>
					)}
				</button>
			</div>
			<main>
				{/* <h2 className="title">
					Products
				</h2> */}
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
								<button className="btn">
									Detail
								</button>
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default Store;