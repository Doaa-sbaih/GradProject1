import React from "react";
import Header from "../../components/HomePageCom/Header/Header";
import Footer from "../../components/HomePageCom/Footer/Footer";
import HeroSection from "../../components/HomePageCom/Herosection/HeroSection";
import FeaturedStores from "../../components/HomePageCom/FeaturedStore/FeaturedStores";
import FeaturedSalles from "../../components/HomePageCom/FeaturedSalles/FeaturedSalles";
const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <main className="content">
        <HeroSection/>
        <br></br>
        <FeaturedSalles/>
        <br></br>
        <FeaturedStores/>
        <br></br>
        <br></br>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
