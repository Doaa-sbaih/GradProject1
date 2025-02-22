import React from "react";
import { Form, InputGroup, Row, Col } from "react-bootstrap";
import { FaStore, FaList, FaMapMarkerAlt } from "react-icons/fa";

const StoreFiltersStore = ({
  onStoreChange = () => {},
  onCategoryChange = () => {},
  onLocationChange = () => {},
  stores = [],
  categories = [],
  selectedStore = "",
  selectedCategory = "",
  location = "",
}) => {
  return (
    <div className="container py-3 border-bottom bg-white">
      <Row className="g-3 align-items-end">
        {/* Store Selection */}
        <Col md={4}>
          <Form.Label htmlFor="store-select">
            <FaStore className="me-2" />
            Store
          </Form.Label>
          <Form.Select
            id="store-select"
            value={selectedStore}
            onChange={(e) => onStoreChange(e.target.value)}
            className="form-control-lg"
          >
            <option value=""> Select Store</option>
            {stores.map((store) => (
              <option key={store.id} value={store.id}>
                {store.name}
              </option>
            ))}
          </Form.Select>
        </Col>

        {/* Category Selection */}
        <Col md={4}>
          <Form.Label htmlFor="category-select">
            <FaList className="me-2" />
            Category
          </Form.Label>
          <Form.Select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="form-control-lg"
          >
            <option value=""> Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </Col>

        {/* Location Search */}
        <Col md={4}>
          <Form.Label htmlFor="location-input">
            <FaMapMarkerAlt className="me-2" />
            Location
          </Form.Label>
          <InputGroup>
            <Form.Control
              id="location-input"
              type="text"
              placeholder="Search for store location"
              value={location}
              onChange={(e) => onLocationChange(e.target.value)}
              className="form-control-lg"
            />
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default StoreFiltersStore;