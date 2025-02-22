import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../FeaturedSalles/CardProduct"; // استيراد بطاقة المنتج

// بيانات المنتجات
const products = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    rating: 4.8,
    discount: 15,
    isNew: true,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    rating: 4.6,
    isNew: true,
  },
  {
    id: "3",
    name: "Premium Coffee Maker",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    rating: 4.5,
    discount: 10,
  },
  {
    id: "4",
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    rating: 4.7,
  },
  {
    id: "5",
    name: "Ergonomic Gaming Chair",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
    rating: 4.4,
    discount: 20,
  },
];

// إعدادات السلايدر
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 },
    },
  ],
};

const FeaturedSalles = () => {
  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-start" style={{ color: "#865016" }}>
          Trending Products
        </h2>
        <Link
          to="/allsalles"  // تعديل الرابط ليأخذك إلى AllSalles
          className="text-end fw-bold"
          style={{ color: "#865016", textDecoration: "none" }}
        >
          View All Products →
        </Link>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2"  style={{ textDecoration: "none" }}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}> {/* رابط لصفحة تفاصيل المنتج */}
              <ProductCard
                name={product.name}
                image={product.image}
                price={product.price}
                discount={product.discount}
                rating={product.rating}
                isNew={product.isNew}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedSalles;
