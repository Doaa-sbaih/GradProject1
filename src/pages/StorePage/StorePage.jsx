import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/HomePageCom/Header/Header";
import Footer from "../../components/HomePageCom/Footer/Footer";

const StorePage = () => {
  // بيانات المتجر
  const storeData = {
    name: "Tech Haven",
    description: "Your one-stop shop for all things technology",
    rating: 4.8,
    totalReviews: 1250,
    banner: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100",
    products: [
      {
        id: "1",
        name: "Wireless Earbuds",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        rating: 4.8,
        isNew: true,
      },
      {
        id: "2",
        name: "Smart Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.6,
        discount: 10,
      },
      {
        id: "3",
        name: "Bluetooth Speaker",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        rating: 4.7,
      },
      {
        id: "4",
        name: "Noise Cancelling Headphones",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        rating: 4.9,
        discount: 15,
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="min-vh-100 bg-light">
      <Header />

      {/* Banner and Store Info */}
      <div className="relative h-24 bg-dark"> {/* تم تقليل الارتفاع هنا إلى h-24 */}
        <img
          src={storeData.banner}
          alt={storeData.name}
          className="w-100 h-24 object-cover opacity-75" // تم تقليل الارتفاع هنا
        />

        {/* صورة اللوجو فوق الصورة الخلفية */}
        <img
          src={storeData.logo}
          alt={`${storeData.name} logo`}
          className="position-absolute rounded-circle border-2 border-white"
          style={{
            width: "60px",
            height: "60px",
            top: "10px",
            left: "20px",
          }}
        />

        {/* معلومات المتجر */}
        <div className="position-absolute bottom-0 left-0 right-0 p-2 text-white bg-gradient-to-top from-black/60 to-transparent">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="flex-fill ms-3">
              <h1 className="h5 fw-bold mb-0">{storeData.name}</h1> {/* تم تصغير حجم الخط */}
              <p className="mb-0 small">{storeData.description}</p> {/* تم تصغير حجم الخط */}
              <div className="d-flex align-items-center gap-1">
                <span className="text-warning">★ {storeData.rating}</span>
                <span>({storeData.totalReviews} reviews)</span>
              </div>
            </div>
            <button className="btn btn-light btn-sm">Follow Store</button>
          </div>
        </div>
      </div>

      {/* Store Content */}
      <div className="container py-4">
        <div className="nav nav-tabs" id="storeTabs" role="tablist">
          <button
            className={`nav-link ${activeTab === "products" ? "active" : ""}`}
            onClick={() => setActiveTab("products")}
            role="tab"
          >
            Products
          </button>
          <button
            className={`nav-link ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
            role="tab"
          >
            About
          </button>
          <button
            className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
            role="tab"
          >
            Reviews
          </button>
        </div>

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="tab-content mt-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
              {storeData.products.map((product) => (
                <div className="col" key={product.id}>
                  <Link
                    to={`/product/${product.id}`}
                    className="text-decoration-none"
                  >
                    <div className="card shadow-sm h-100 hover-effect">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">${product.price}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-warning">★ {product.rating}</span>
                          {product.discount && (
                            <span className="text-danger">
                              -{product.discount}%
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Tab */}
        {activeTab === "about" && (
          <div className="tab-content mt-4">
            <div className="card shadow-sm p-4">
              <h2 className="h3 mb-4">About {storeData.name}</h2>
              <p>{storeData.description}</p>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div className="tab-content mt-4">
            <div className="card shadow-sm p-4">
              <h2 className="h3 mb-4">Customer Reviews</h2>
              <p>Reviews coming soon...</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StorePage;