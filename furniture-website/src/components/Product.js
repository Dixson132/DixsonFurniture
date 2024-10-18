import React from 'react';

const Product = ({ image, title, price }) => {
    return (
        <div className="product-item">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>${price}</p>
            <a href="#">View Details</a>
        </div>
    );
}

export default Product;
