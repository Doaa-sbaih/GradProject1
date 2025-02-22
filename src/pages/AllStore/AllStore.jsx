import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa"; // Only one star for rating
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/HomePageCom/Header/Header";
import Footer from "../../components/HomePageCom/Footer/Footer";
import SearchFiltersStore from '../../components/HomePageCom/SearchFiltersStore/SearchFiltersStore';
const stores = [
  {
    id: "1",
    name: "Fashion Forward",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    rating: 4.8,
    category: "Fashion",
    description: "Trendy and contemporary fashion for the modern individual",
    totalReviews: 230,
    location: "New York, USA",
  },
  {
    id: "2",
    name: "Tech Haven",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    rating: 4.6,
    category: "Electronics",
    description: "Your one-stop shop for all things technology",
    totalReviews: 185,
    location: "San Francisco, USA",
  },
  {
    id: "3",
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103",
    rating: 4.7,
    category: "Home Decor",
    description: "Beautiful home accessories and modern furniture",
    totalReviews: 156,
    location: "Los Angeles, USA",
  },
  {
    id: "4",
    name: "Outdoor Adventure",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b",
    rating: 4.5,
    category: "Sports",
    description: "Equipment and gear for outdoor enthusiasts",
    totalReviews: 142,
    location: "Denver, USA",
  },
];

const AllStores = () => {
  return (
    <div>
      <Header/>
      <SearchFiltersStore/>
      <Container className="py-4">
        <h2 className="text-center mb-4" style={{ color: "#865016" }}>
        </h2>
        <Row className="g-4">
          {stores.map((store) => (
            <Col key={store.id} xs={12} sm={6} md={4} lg={3}>
              <Link to={`/store/${store.id}`} className="text-decoration-none">
                <Card className="h-100 shadow-sm position-relative">
                  <Card.Img
                    variant="top"
                    src={store.image}
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{store.name}</Card.Title>
                    <Card.Text>
                      <small>{store.description}</small>
                      <br />
                      <strong>Location:</strong> {store.location}
                    </Card.Text>
                  </Card.Body>
                  {/* Rating with one star on the image */}
                  <div
                    className="position-absolute top-0 start-0 m-2 d-flex gap-1 align-items-center p-1 rounded-3"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                  >
                    <FaStar className="text-warning" />
                    <span className="text-dark">{store.rating}</span>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default AllStores;
