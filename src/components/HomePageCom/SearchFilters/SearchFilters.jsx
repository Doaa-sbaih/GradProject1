import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const SearchFilters = ({
  onStoreChange = () => {},
  onCategoryChange = () => {},
  onPriceRangeChange = () => {},
  stores = [
    { id: "1", name: "Store 1" },
    { id: "2", name: "Store 2" },
    { id: "3", name: "Store 3" },
  ],
  categories = [
    { id: "1", name: "Electronics" },
    { id: "2", name: "Clothing" },
    { id: "3", name: "Home & Garden" },
  ],
  selectedStore = "",
  selectedCategory = "",
  priceRange = [0, 1000],
}) => {
  const [minPrice, setMinPrice] = useState(priceRange[0]);
  const [maxPrice, setMaxPrice] = useState(priceRange[1]);

  return (
    <div className="container py-3 border-bottom bg-white">
      <div className="row g-3 align-items-end">
        {/* اختيار المتجر */}
        <div className="col-md-3">
          <Form.Label htmlFor="store-select">المتجر</Form.Label>
          <Form.Select
            id="store-select"
            value={selectedStore}
            onChange={(e) => onStoreChange(e.target.value)}
          >
            <option value="">اختر المتجر</option>
            {stores.map((store) => (
              <option key={store.id} value={store.id}>{store.name}</option>
            ))}
          </Form.Select>
        </div>

        {/* اختيار الفئة */}
        <div className="col-md-3">
          <Form.Label htmlFor="category-select">الفئة</Form.Label>
          <Form.Select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="">اختر الفئة</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </Form.Select>
        </div>

        {/* نطاق السعر */}
        <div className="col-md-4">
          <Form.Label>نطاق السعر</Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              value={minPrice}
              onChange={(e) => {
                setMinPrice(Number(e.target.value));
                onPriceRangeChange([Number(e.target.value), maxPrice]);
              }}
              min={0}
              className="text-center"
            />
            <InputGroup.Text>إلى</InputGroup.Text>
            <Form.Control
              type="number"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(Number(e.target.value));
                onPriceRangeChange([minPrice, Number(e.target.value)]);
              }}
              max={1000}
              className="text-center"
            />
          </InputGroup>
        </div>

        {/* زر إعادة التصفية */}
        <div className="col-md-2 d-grid">
          <Button
            variant="outline-secondary"
            onClick={() => {
              setMinPrice(0);
              setMaxPrice(1000);
              onStoreChange("");
              onCategoryChange("");
              onPriceRangeChange([0, 1000]);
            }}
          >
            إعادة التصفية
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;