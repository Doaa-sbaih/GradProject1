import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./PagesLanding/LandingPage/LandingPage.jsx"; 
import Home from "./pages/HomePage/Home.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import { CartProvider } from "./components/CartPageCom/CartContext";
import FavoritePage from "./pages/FavoritePage/Favorite.jsx";
import AccountPage from "./pages/AccountPage/MyAccount.jsx";
import AllStore from "./pages/AllStore/AllStore.jsx";
import AllSalles from "./pages/AllSalles/AllSalles.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx"; 
import LogoutPage from "./pages/LogoutPage/Logout.jsx";
import StorePage from "./pages/StorePage/StorePage.jsx";
import LoginStore from './PagesLanding/LogIn/LogInStore/LogInStore.jsx';
import LoginUser from './PagesLanding/LogIn/LogInUser/LogInUser.jsx';
import SignUpStore from './PagesLanding/SignUp/SignUpStore/SignUpStore.jsx';
import SignUpUser from './PagesLanding/SignUp/SignUpUser/SignUpUser.jsx';




function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* الصفحات العامة */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/myaccount" element={<AccountPage />} />
          <Route path="/allstore" element={<AllStore />} />
          <Route path="/allsalles" element={<AllSalles />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/login/store" element={<LoginStore />} />
          <Route path="/login/user" element={<LoginUser />} />
          <Route path="/signup/store" element={<SignUpStore />} />
          <Route path="/signup/user" element={<SignUpUser />} />
          <Route path="/user/home" element={<Home />} />
          <Route path="/store/:id" element={<StorePage />} />

          
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
