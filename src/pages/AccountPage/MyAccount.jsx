import React, { useState } from "react";
import "../AccountPage/MyAccount.css";
import Header from "../../components/HomePageCom/Header/Header";
import Footer from "../../components/HomePageCom/Footer/Footer";

const Account = () => {
  // بيانات المستخدم (يمكن استبدالها ببيانات من قاعدة البيانات أو السياق)
  const [user, setUser] = useState({
    name: "محمد أحمد",
    email: "mohamed@example.com",
    profileImage: "https://via.placeholder.com/150", // صورة افتراضية
    phone: "+1234567890",
    address: "شارع النخيل، الرياض، السعودية",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Header/>
    <div className="my-account">
      <h2>حسابي</h2>
      <div className="profile-section">
        <img src={user.profileImage} alt="صورة المستخدم" className="profile-image" />
        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="الاسم"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="البريد الإلكتروني"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="رقم الهاتف"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="العنوان"
            />
            <button onClick={handleSave} className="save-button">
              حفظ التغييرات
            </button>
          </div>
        ) : (
          <div className="user-info">
            <p>
              <strong>الاسم:</strong> {user.name}
            </p>
            <p>
              <strong>البريد الإلكتروني:</strong> {user.email}
            </p>
            <p>
              <strong>رقم الهاتف:</strong> {user.phone}
            </p>
            <p>
              <strong>العنوان:</strong> {user.address}
            </p>
            <button onClick={handleEdit} className="edit-button">
              تعديل المعلومات
            </button>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Account;