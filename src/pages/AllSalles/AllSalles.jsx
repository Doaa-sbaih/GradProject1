import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa"; // نجمة واحدة فقط
import Header from "../../components/HomePageCom/Header/Header";
import Footer from "../../components/HomePageCom/Footer/Footer";
import SearchFilters from "../../components/HomePageCom/SearchFilters/SearchFilters";
import "bootstrap/dist/css/bootstrap.min.css";
import './AllSalles.css';

const defaultProducts = [
  {
    id: "1",
    title: "Premium Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    storeName: "Audio Tech",
    rating: 4.8,
  },
  {
    id: "2",
    title: "Smart Watch Series X",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    storeName: "Tech Gadgets",
    rating: 4.5,
  },
  {
    id: "3",
    title: "Professional Camera Kit",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    storeName: "Photo Pro",
    rating: 4.9,
  },
  {
    id: "4",
    title: "Ergonomic Gaming Chair",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975",
    storeName: "Gaming Essentials",
    rating: 4.6,
  },
  {
    id: "5",
    title: "Ultra HD Monitor",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    storeName: "Display Solutions",
    rating: 4.7,
  },
  {
    id: "6",
    title: "Mechanical Keyboard",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    storeName: "PC Peripherals",
    rating: 4.4,
  },
];

const AllSalles = ({ products = defaultProducts, onAddToCart = () => {} }) => {
  const [page, setPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    setDisplayedProducts(products.slice(0, page * 6));
  }, [page, products]);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <Header />
      <SearchFilters />
      <Container
        fluid
        className="p-4 bg-light"
        style={{ maxHeight: "846px", overflowY: "auto" }}
        onScroll={handleScroll}
      >
        <Row className="g-4">
          {displayedProducts.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow-lg border-0 position-relative overflow-hidden product-card">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 start-0 m-2 d-flex gap-2 align-items-center p-1 rounded-3" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
                    <FaStar className="text-warning" />
                    <span className="text-dark">{product.rating}</span>
                  </div>
                  <div className="position-absolute top-0 end-0 m-2 d-flex gap-2 hover-overlay">
                    <Link
                      to="/favorites"
                      className="btn btn-light rounded-circle p-2 border icon-button"
                    >
                      <FaHeart className="text-muted" />
                    </Link>
                    <Link
                      to="/cart"
                      className="btn btn-light rounded-circle p-2 border icon-button"
                      onClick={() => onAddToCart(product.id)}
                    >
                      <FaShoppingCart className="text-muted" />
                    </Link>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-light rounded-circle p-2 border icon-button"
                    >
                      <FaEye className="text-muted" />
                    </Link>
                  </div>
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    <strong>Store:</strong> {product.storeName}
                    <br />
                    <strong>Price:</strong> ${product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AllSalles;
