import React from "react";
import { Link, useLocation } from "react-router-dom";  // استيراد useLocation
import { FaShoppingCart, FaHeart, FaBars, FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./MatjariLogo.png";

const Header = ({ scrollToHeroSection }) => {
  const location = useLocation();  // تحديد موقع الصفحة الحالية

  // دالة للتنقل إلى أعلى الصفحة في الصفحة الحالية
  const handleSearchClick = () => {
    if (location.pathname === "/user/home") {
      window.scrollTo(0, 0); // إذا كنت في الصفحة الرئيسية، التمرير إلى الأعلى
    } else {
      // في حال كنت في صفحة أخرى، التوجيه إلى الصفحة الرئيسية
      window.location.href = "/user/home";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid">
        {/* الشعار */}
        <Link className="navbar-brand fw-bold" to="/user/home">
          <img
            src={logo}
            alt="Shopping Illustration"
            className="img-fluid"
            style={{ maxHeight: "60px", width: "auto", objectFit: "contain" }}
          />
          Matjari
        </Link>

        {/* زر القائمة للجوال */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <FaBars />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {/* أيقونة البحث */}
            <li className="nav-item">
              <button
                className="nav-link text-dark border-0 bg-transparent"
                style={{ fontSize: "20px" }}
                onClick={handleSearchClick} // تنفيذ التمرير أو التوجيه عند النقر
              >
                <FaSearch className="icon-hover" />
              </button>
            </li>

            {/* باقي الأيقونات */}
            <li className="nav-item">
              <Link to="/cart" className="nav-link text-dark" style={{ fontSize: "20px" }}>
                <FaShoppingCart className="icon-hover" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/favorites" className="nav-link text-dark" style={{ fontSize: "20px" }}>
                <FaHeart className="icon-hover" />
              </Link>
            </li>

            {/* القائمة المنسدلة */}
            <li className="nav-item dropdown">
              <button
                className="btn dropdown-toggle text-dark border-0"
                type="button"
                data-bs-toggle="dropdown"
              >
                <FaBars className="icon-hover" />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/user/home">Home</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/myaccount">My Account</Link>
                </li>
                <li>
                  <Link className="dropdown-item text-danger" to="/logout">Logout</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* تأثير hover */}
      <style>
        {`
          .icon-hover {
            transition: color 0.3s ease;
          }
          .icon-hover:hover {
            color: #865016 !important;
          }
        `}
      </style>
    </nav>
  );
};

export default Header;
