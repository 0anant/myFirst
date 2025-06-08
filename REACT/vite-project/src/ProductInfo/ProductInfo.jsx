import React from 'react'

const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: "$1200",
        availability : "In Stock",
    }
  return (
    <div>
        <h3>Product Info</h3>
        <ol>
            <li>name:  {product.name}</li>
            <li>price:     {product.price}</li>
            <li>availability:   {product.availability}</li>
        </ol>
    </div>
  );
};

export default ProductInfo;
