import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../components/CartPageCom/CartContext";
import Header from "../../components/HomePageCom/Header/Header";
import Footer from "../../components/HomePageCom/Footer/Footer";
import data from "../../data/images/data";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, favoriteItems, toggleFavorite } = useCart();
  const product = data.products.find((p) => p.id.toString() === id);

  if (!product) {
    return <h2 className="text-center">المنتج غير موجود</h2>;
  }

  const isFavorite = favoriteItems.some((item) => item.id === product.id);
  const store = data.stores.find((s) => s.id === product.storeId);

  const handleImageChange = (src) => {
    document.getElementById("mainImage").src = src;
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          {/* صورة المنتج الرئيسية مع الصور المصغرة */}
          <div className="col-md-6 mb-4">
            <img
              id="mainImage"
              src={product.imageUrl}
              alt={product.name}
              className="img-fluid rounded mb-3"
            />
            <div className="d-flex justify-content-between">
              {product.thumbnails && product.thumbnails.length > 0 ? (
                product.thumbnails.map((thumb, index) => (
                  <img
                    key={index}
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    className={`thumbnail rounded ${index === 0 ? "active" : ""}`}
                    onClick={() => handleImageChange(thumb)}
                    style={{ cursor: "pointer", width: "60px", height: "60px" }}
                  />
                ))
              ) : (
                <p>لا توجد صور مصغرة</p>
              )}
            </div>
          </div>

          {/* تفاصيل المنتج */}
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p className="text-muted mb-4">SKU: {product.sku}</p>
            <div className="mb-3">
              <span className="h4 me-2">{product.price} جنيه</span>
              <span className="text-muted">
                <s>{product.oldPrice} جنيه</s>
              </span>
            </div>
            <div className="mb-3">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={`bi ${index < product.rating ? "bi-star-fill" : "bi-star"} text-warning`}
                />
              ))}
              <span className="ms-2">{product.rating} ({product.reviews} تقييم)</span>
            </div>
            <p>{product.description}</p>

            {/* اختيار اللون */}
            <div className="mb-4">
              <h5>اللون:</h5>
              <div className="btn-group" role="group" aria-label="Color selection">
                {product.colors && product.colors.length > 0 ? (
                  product.colors.map((color, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        className="btn-check"
                        name="color"
                        id={color}
                        autoComplete="off"
                        defaultChecked={index === 0}
                      />
                      <label className={`btn btn-outline-${color}`} htmlFor={color}>
                        {color}
                      </label>
                    </div>
                  ))
                ) : (
                  <p>لا توجد ألوان متوفرة</p>
                )}
              </div>
            </div>

            {/* اختيار الكمية */}
            <div className="mb-4">
              <label htmlFor="quantity" className="form-label">الكمية:</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                defaultValue="1"
                min="1"
                style={{ width: "80px" }}
              />
            </div>

            {/* أزرار إضافة إلى السلة والمفضلة */}
            <div className="d-flex mb-4">
              <button className="btn btn-primary btn-lg me-2" onClick={() => addToCart(product)}>
                <i className="bi bi-cart-plus"></i> إضافة إلى السلة
              </button>
              <button
                className={`btn btn-outline-secondary btn-lg ${isFavorite ? "text-danger" : ""}`}
                onClick={() => toggleFavorite(product)}
              >
                <i className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"}`}></i> {isFavorite ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}
              </button>
            </div>

            {/* معلومات المتجر */}
            {store && (
              <div className="mt-4">
                <h5>المتجر:</h5>
                <img
                  src={store.logo}
                  alt={store.name}
                  className="img-fluid mb-2"
                  style={{ maxWidth: "150px" }}
                />
                <p>
                  <strong>المتجر: </strong>
                  <Link to={`/store/${store.id}`} className="text-decoration-none">
                    {store.name}
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
