import React from 'react';
import Product from './Product';

const products = [
    { id: 1, image: '/images/image1.jpg', title: 'Stylish Sofa', price: '499.99' },
    { id: 2, image: '/images/image2.jpg', title: 'Modern Chair', price: '199.99' },
];

const ProductList = () => {
    return (
        <section className="products">
            <h2>Featured Products</h2>
            <div className="product-grid">
                {products.map(product => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;
