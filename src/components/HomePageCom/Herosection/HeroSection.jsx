import React, { useState } from "react";
import { FaImage, FaUpload, FaTimes, FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = ({ onSearch = () => {}, onImageSearch = () => {} }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleImageSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      onImageSearch(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedImage(file);
      onImageSearch(file);
    }
  };

  return (
    <div
      id="herosection"
      className="hero-section text-center py-5"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556740714-a8395b3bf30f')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1, // لضمان أن النصوص فوق الصورة
        }}
      >
        <h1
          className="display-4 fw-bold mb-3 text-white"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // ظلال للنص
            fontSize: "3rem", // تعديل حجم النص
          }}
        >
          Welcome to Our Online Store
        </h1>
        <p
          className="mb-5 text-white"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // ظلال للنص
            fontSize: "1.25rem", // تعديل حجم النص
          }}
        >
          Discover the best products at unbeatable prices. Shop now and enjoy a
          seamless shopping experience.
        </p>

        {/* Search Form */}
        <div className="d-flex justify-content-center mb-4">
          <form className="input-group w-75" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Search for products, brands, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: "none",
                borderRadius: "25px 0 0 25px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // إضافة تأثير ظل
              }}
            />
            <button
              className="btn"
              type="submit"
              style={{
                backgroundColor: "#865016",
                color: "#fff",
                borderRadius: "0 25px 25px 0",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // إضافة تأثير ظل
              }}
            >
              <FaSearch />
            </button>
          </form>
        </div>

        {/* Image Search Button */}
        <div className="mb-4">
          <button
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#imageSearchModal"
            style={{
              backgroundColor: "#865016",
              color: "#fff",
              borderRadius: "25px",
              padding: "10px 20px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // إضافة تأثير ظل
            }}
          >
            <FaImage className="me-2" /> Search with Image
          </button>
        </div>

        {/* Image Search Modal */}
        <div
          className="modal fade"
          id="imageSearchModal"
          tabIndex="-1"
          aria-labelledby="imageSearchModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: "#865016" }}>
                  Upload an Image for Search
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <div
                  className={`border p-4 rounded ${
                    dragActive ? "border-primary bg-light" : "border-secondary"
                  }`}
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                >
                  {selectedImage ? (
                    <div className="position-relative">
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Preview"
                        className="img-fluid rounded"
                      />
                      <button
                        className="btn btn-danger btn-sm position-absolute top-0 end-0"
                        onClick={() => setSelectedImage(null)}
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ) : (
                    <>
                      <FaUpload className="text-secondary mb-2" size={40} />
                      <p>Drag & drop an image here or click to upload</p>
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleImageSelect}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mt-4">
          <span className="text-white">Popular Categories:</span>
          {["Electronics", "Fashion", "Home & Living", "Sports"].map((tag) => (
            <button
              key={tag}
              className="btn btn-link text-decoration-none mx-2"
              style={{ color: "#fff", fontSize: "1.1rem" }} // تعديل حجم النص
              onClick={() => setSearchQuery(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
