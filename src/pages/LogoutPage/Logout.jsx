import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../components/HomePageCom/Header/Matjari.png"; // Ensure correct logo path

const LogoutPage = () => {
  return (
    <section className="p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="card border-light-subtle shadow-sm">
          <div className="row g-0">
            {/* Image */}
            <div className="col-12 col-md-6 bg-white d-flex align-items-center justify-content-center">
              <div className="col-10 col-xl-8 py-3">
                <img
                  className="img-fluid rounded mb-4"
                  loading="lazy"
                  src={logo}
                  alt="Logo"
                  style={{ height: '200px', objectFit: 'contain', width: '100%' }}
                />
                <hr className="border-primary-subtle mb-4" />
              </div>
            </div>
            {/* Text */}
            <div className="col-12 col-md-6" style={{ backgroundColor: '#F5F5F5' }}>
              <div className="card-body p-3 p-md-4 p-xl-5">
                <h2 className="h1 mb-4 text-center text-dark">You have logged out successfully</h2>
                <p className="lead text-center" style={{ color: '#000' }}>
                  Thank you for using the "Matjari" platform. If you would like to log in again or create a new account,
                  please choose one of the following options:
                </p>
                <div className="options text-center mt-4">
                  <Link 
                    to="/login/user" 
                    className="btn btn-outline-primary mb-3 px-4 py-2 fs-5"
                    style={{ borderColor: "#865016", color: "#865016", transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#865016"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                  >
                    Login as User
                  </Link>
                  <br />
                  <Link 
                    to="/login/store" 
                    className="btn btn-outline-primary mb-3 px-4 py-2 fs-5"
                    style={{ borderColor: "#865016", color: "#865016", transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#865016"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                  >
                    Login as Store
                  </Link>
                  <br />
                  <Link 
                    to="/" 
                    className="btn btn-outline-secondary px-4 py-2 fs-5"
                    style={{ borderColor: "#000", color: "#000", transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#000"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                  >
                    Back to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoutPage;
