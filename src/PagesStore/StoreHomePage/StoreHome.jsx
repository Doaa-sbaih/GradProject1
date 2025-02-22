import React, { useState } from "react";
import { useParams } from "react-router-dom"; // لاستلام الـ id من الرابط
import AppHeader from "../../components/StorePageCom/AppHeader/AppHeader";
import Footer from "../../components/HomePageCom/Footer/Footer";
import StoreDetails from "../StoreDetails/StoreDetails";
import ProductManagement from "../ProductManagement/ProductManagement";
import SalesReport from "../SalesReport/SalesReport";
import InventoryManagement from "../InventoryManagement/InventoryManagement";
import './StoreHome.css';

const StoreHome = () => {
  const { id } = useParams(); // استلام الـ id من الرابط
  const [activeTab, setActiveTab] = useState("details"); // حالة التاب النشطة

  return (
    <div>
      <AppHeader />
      <div className="store-page">
        <div className="store-navigation">
          <button onClick={() => setActiveTab("details")}>تفاصيل المتجر</button>
          <button onClick={() => setActiveTab("products")}>إدارة المنتجات</button>
          <button onClick={() => setActiveTab("sales")}>تقرير المبيعات</button>
          <button onClick={() => setActiveTab("inventory")}>إدارة المخزون</button>
        </div>

        <div className="store-content">
          {/* عرض المكونات بناءً على التاب النشط */}
          {activeTab === "details" && <StoreDetails storeId={id} />}
          {activeTab === "products" && <ProductManagement />}
          {activeTab === "sales" && <SalesReport />}
          {activeTab === "inventory" && <InventoryManagement />}
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default StoreHome;
