import React from "react";

const ProductCard = ({ name, image, price, discount, rating, isNew }) => {
  return (
    <div
      className="card h-100 border-0 shadow-sm"
      style={{ borderRadius: "10px", overflow: "hidden" }}
    >
      <div className="position-relative">
        <img
          src={image}
          alt={name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        {isNew && (
          <span
            className="position-absolute top-0 start-0 m-2 bg-success text-white px-2 py-1"
            style={{
              fontSize: "12px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            New
          </span>
        )}
        {discount && (
          <span
            className="position-absolute top-0 end-0 m-2 bg-danger text-white px-2 py-1"
            style={{
              fontSize: "12px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            -{discount}%
          </span>
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: "16px", color: "#333" }}>
          {name}
        </h5>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text mb-0" style={{ color: "#865016", fontWeight: "bold" }}>
            ${price.toFixed(2)}
          </p>
          <div className="d-flex align-items-center">
            <span className="text-warning me-1">★</span>
            <span style={{ color: "#6c757d" }}>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
