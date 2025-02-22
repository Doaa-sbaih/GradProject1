import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; // تأكد من استيراد مكتبة الأيقونات

const OurServices = () => {
  return (
    <section className="py-5 border-bottom" id="services">
      <div className="container px-5 my-5">
        <div className="row gx-5">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="feature rounded-3 mb-3">
              <i className="bi bi-search" style={{ fontSize: '3rem', color: 'black' }}></i>
            </div>
            <h2 className="h4 fw-bolder">Search Products by Text and Image</h2>
            <p style={{ color: 'black' }}>
              Our advanced search functionality lets users find products with
              ease, whether by typing keywords or uploading images. Find exactly
              what you need in seconds.
            </p>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="feature rounded-3 mb-3">
              <i className="bi bi-cart3" style={{ fontSize: '3rem', color: 'black' }}></i>
            </div>
            <h2 className="h4 fw-bolder">Multiple Stores in One Cart</h2>
            <p style={{ color: 'black' }}>
              Add products from multiple stores into a single cart and complete
              your purchase all at once. Enjoy a streamlined and efficient shopping
              experience.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="feature rounded-3 mb-3">
              <i className="bi bi-truck" style={{ fontSize: '3rem', color: 'black' }}></i>
            </div>
            <h2 className="h4 fw-bolder">Track Orders in Real Time</h2>
            <p style={{ color: 'black' }}>
              Stay updated with the status of your order during the delivery
              process. Track your items with ease and get real-time notifications
              about your order’s progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
