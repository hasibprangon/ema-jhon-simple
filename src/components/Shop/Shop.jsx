import 'react';
import './Shop.css'
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='shopContainer'>
            <div className="productContainer">
            {
                products.map(product => <Product
                key={product.id}
                product ={product}
                ></Product>)
            }
            </div>

            <div className="cartContainer">
                <h4>order</h4>

            </div>
        </div>
    );
};

export default Shop;