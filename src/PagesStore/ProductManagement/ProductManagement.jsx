import React, { useState } from "react";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "قميص أحمر", price: 50, description: "قميص مريح" },
    { id: 2, name: "بنطال جينز", price: 100, description: "بنطال مريح وعصري" },
  ]);

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "منتج جديد",
      price: 150,
      description: "وصف المنتج الجديد",
    };
    setProducts([...products, newProduct]);
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="product-management">
      <h2>إدارة المنتجات</h2>
      <button onClick={addProduct}>إضافة منتج</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.name} - {product.price} جنيه</p>
            <p>{product.description}</p>
            <button onClick={() => removeProduct(product.id)}>حذف المنتج</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
