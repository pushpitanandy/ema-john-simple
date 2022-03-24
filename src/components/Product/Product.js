import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                <p className='product-name'>{name}</p>
            </div>
        </div>
    );
};

export default Product;