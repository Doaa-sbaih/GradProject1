import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";

const StoreCard = ({
  id = "1",
  name = "Sample Store",
  image = "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  rating = 4.5,
  category = "Fashion",
  description = "A trendy store offering the latest fashion and accessories.",
  totalReviews = 128,
}) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <Link to={`/store/${id}`} className="text-decoration-none">
        <div className="position-relative">
          <img
            src={image}
            alt={name}
            className="card-img-top rounded-top"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <span className="badge bg-primary position-absolute top-0 end-0 m-2">
            {category}
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title text-dark">{name}</h5>
          <p className="card-text text-muted small">{description}</p>
          <div className="d-flex align-items-center">
            <FaStar className="text-warning me-1" />
            <span className="fw-bold">{rating}</span>
            <span className="text-muted ms-2">({totalReviews} reviews)</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StoreCard;