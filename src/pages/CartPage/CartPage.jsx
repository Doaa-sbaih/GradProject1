import React from "react";
import { useCart } from "../../components/CartPageCom/CartContext"; // تأكد من أن المسار صحيح
import "./CartPage.css"; // تأكد من إضافة التنسيق الصحيح

const CartPage = () => {
  const { cartItems, addToCart, removeOneFromCart, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0); // عداد المنتجات في السلة

  return (
    <div className="cart-page">
      <h2>سلة التسوق</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">السلة فارغة</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>
                  {item.price} جنيه × {item.quantity}
                </p>
                <div className="cart-controls">
                  <button
                    className="increase"
                    onClick={() => addToCart(item)}
                  >
                    ➕
                  </button>
                  <button
                    className="decrease"
                    onClick={() => removeOneFromCart(item.id)}
                  >
                    ➖
                  </button>
                  <button
                    className="remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>الإجمالي: {totalPrice} جنيه</h3>
            <h4>عدد المنتجات: {totalItems}</h4> {/* عرض عدد المنتجات */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
