import React from "react";
import { useCart } from "../../components/CartPageCom/CartContext";
import "./Favorite.css";

const FavoritesPage = () => {
  const { favoriteItems, removeFromFavorites } = useCart();

  return (
    <div className="favorites-page">
      <h2>المفضلة</h2>
      {favoriteItems.length === 0 ? (
        <p className="empty-favorites">لم تقم بإضافة منتجات بعد</p>
      ) : (
        <div className="favorite-items">
          {favoriteItems.map((item) => (
            <div key={item.id} className="favorite-item">
              <img src={item.imageUrl} alt={item.name} className="favorite-item-image" />
              <div className="favorite-item-details">
                <h3>{item.name}</h3>
                <p>{item.price} جنيه</p>
                <button className="remove-favorite" onClick={() => removeFromFavorites(item.id)}>
                  ❌ إزالة من المفضلة
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;

