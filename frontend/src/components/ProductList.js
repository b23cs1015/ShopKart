import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(prod => (
          <li key={prod._id}>
            <h3>{prod.name}</h3>
            <p>{prod.description}</p>
            <p>Price: ${prod.price}</p>
            {prod.image && <img src={prod.image} alt={prod.name} width="100" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;