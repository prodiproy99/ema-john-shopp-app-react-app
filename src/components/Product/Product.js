import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name, img, ratings, seller, price} = props.product;
    // console.log(props.handleToCart);
    return (
        <div className='product'> 
            <img src={img} alt=""></img>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating:{ratings} stars</p>
            </div>

            <button onClick={() => props.handleAddToCart(props.product)}className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} /> 
            </button>

        </div>
    );
};

export default Product;