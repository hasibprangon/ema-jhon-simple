import 'react';
import './Shop.css'
import { useEffect, useState } from 'react';
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
            <h2>Products:{products.length} </h2>
            </div>

            <div className="cartContainer">
                <h4>order</h4>

            </div>
        </div>
    );
};

export default Shop;