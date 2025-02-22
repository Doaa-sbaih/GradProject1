import React from "react";
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../components/HomePageCom/Header/Matjari.png'; // تأكد من المسار الصحيح للصورة

const HeroSection = () => {
    const navigate = useNavigate();

    const handleStoreClick = () => {
        navigate('/login/store');
    };

    const handleUserClick = () => {
        navigate('/login/user');
    };

    return (
      <header 
        className="py-5 d-flex align-items-center" 
        style={{ 
          minHeight: "100vh",
          backgroundColor: "white", 
          color: "black"
        }}
      >
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            {/* النصوص */}
            <div className="col-lg-6">
                <h1 className="display-5 fw-bolder mb-2">
                    Welcome to the Ultimate Online Shopping Experience!
                </h1>
                <p className="lead mb-4">
                    Explore a wide range of products with just a click or an image. 
                    Shop from multiple stores at once, track your orders in real-time, 
                    and receive personalized recommendations.
                </p>
                <p className="mb-4">
                    Sign up today and start your journey!
                </p>
                <div className="d-grid gap-3 d-sm-flex">
                    <button 
                        onClick={handleStoreClick} 
                        className="btn btn-lg px-4" 
                        style={{ backgroundColor: "#865016", color: "white", border: "none" }}
                    >
                        Store
                    </button>
                    <button 
                        onClick={handleUserClick} 
                        className="btn btn-lg px-4" 
                        style={{ backgroundColor: "#865016", color: "white", border: "none" }}
                    >
                        User
                    </button>    
                </div>
            </div>
            {/* الصورة */}
            <div className="col-lg-6 text-center">
                <img 
                    src={backgroundImage} 
                    alt="Shopping Illustration" 
                    className="img-fluid"
                    style={{ maxHeight: "400px", width: "100%", objectFit: "contain" }}
                />
            </div>
          </div>
        </div>
      </header>
    );
};

export default HeroSection;
