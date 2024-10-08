import React, { useState } from 'react';

const Seller = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddProduct = () => {
    const newProduct = { name: productName, price, quantity };
    setProducts([...products, newProduct]);
    setProductName('');
    setPrice('');
    setQuantity('');
  };

  return (
    <div>
      <h2>Seller Panel</h2>
      <h3>Add Product</h3>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
      <h3>Products</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - ${product.price} (Quantity: {product.quantity})</li>
        ))}
      </ul>
    </div>
  );
};

export default Seller;
