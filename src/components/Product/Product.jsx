import 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const { name, price, ratings, seller, img } = props.product;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='productInfo'>
                <h5 className='productName'>{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btnCart'>Add to cart</button>
        </div>
    );
};

export default Product;