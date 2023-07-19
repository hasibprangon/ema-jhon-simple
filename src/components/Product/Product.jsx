import 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const {name, price, ratings, seller, img} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5>{name}</h5>
        </div>
    );
};

export default Product;