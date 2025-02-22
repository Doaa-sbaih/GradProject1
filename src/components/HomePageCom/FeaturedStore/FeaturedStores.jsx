import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreCard from "../FeaturedStore/CardStore";

const stores = [
  {
    id: "1",
    name: "Fashion Forward",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    rating: 4.8,
    category: "Fashion",
    description: "Trendy and contemporary fashion for the modern individual",
    totalReviews: 230,
  },
  {
    id: "2",
    name: "Tech Haven",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    rating: 4.6,
    category: "Electronics",
    description: "Your one-stop shop for all things technology",
    totalReviews: 185,
  },
  {
    id: "3",
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103",
    rating: 4.7,
    category: "Home Decor",
    description: "Beautiful home accessories and modern furniture",
    totalReviews: 156,
  },
  {
    id: "4",
    name: "Outdoor Adventure",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b",
    rating: 4.5,
    category: "Sports",
    description: "Equipment and gear for outdoor enthusiasts",
    totalReviews: 142,
  },
];

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
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const FeaturedStores = () => {
  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-start" style={{ color: "#865016" }}>
          Featured Stores
        </h2>
        <Link
          to="/allstore"  // تعديل الرابط ليأخذك إلى AllStores
          className="text-end fw-bold"
          style={{ color: "#865016", textDecoration: "none" }}
        >
          View All Stores →
        </Link>
      </div>
      <Slider {...settings}>
        {stores.map((store) => (
          <div key={store.id} className="px-2">
            <Link to={`/store/${store.id}`} 
            style={{ textDecoration: "none" }}> {/* رابط لصفحة تفاصيل المتجر */}
              <StoreCard
                name={store.name}
                image={store.image}
                rating={store.rating}
                category={store.category}
                description={store.description}
                totalReviews={store.totalReviews}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedStores;
