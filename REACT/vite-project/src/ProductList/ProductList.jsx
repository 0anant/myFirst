import React from 'react'

const ProductList = () => {

    const product = [
        {id:1 ,name: "Phone", price: "1200"},
        {id:2, name: "Laptop", price:"1500"},
        {id:3, name: "Computer", price:"1000"},
    ];

  return (
    <div>
        {product.map(({id, name, price})=>(
            <ul key= {id}>
                <li>{name}</li>
                <li>{price}</li>
            </ul>
        ))};
    </div>
  );
};

export default ProductList;