import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../components/HomePageCom/Header/Matjari.png';

const SignUpStore = () => {
    const navigate = useNavigate();
    const [storeData, setStoreData] = useState({
        storeName: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        description: '',
        category: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStoreData({
            ...storeData,
            [name]: value
        });
    };

    const handleSignUp = () => {
        console.log(storeData);
        navigate('/store/home');
    };

    return (
        <section className="p-3 p-md-4 p-xl-5" >
            <div className="container">
                <div className="card border-light-subtle shadow-sm">
                    <div className="row g-0">
                        {/* الصورة */}
                        <div className="col-12 col-md-6 bg-white d-flex align-items-center justify-content-center">
                            <div className="col-10 col-xl-8 py-3">
                                <img
                                    className="img-fluid rounded mb-4"
                                    loading="lazy"
                                    src={logo}
                                    alt="Logo"
                                    style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                                />
                                <hr className="border-primary-subtle mb-4" />
                                <h2 className="h1 mb-4">Create Your Store Now and Start Selling</h2>
                                <p className="lead m-0" style={{ color: '#000' }}>
                                    Register your store easily and start offering your products to customers
                                </p>
                            </div>
                        </div>
                        {/* الفورم */}
                        <div className="col-12 col-md-6" style={{ backgroundColor: '#F5F5F5' }}>
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <h3 className="mb-4 text-center">Create a Store Account</h3>
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="storeName" placeholder="Store Name" value={storeData.storeName} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" name="email" placeholder="Email" value={storeData.email} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="phone" placeholder="Phone Number" value={storeData.phone} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" name="password" placeholder="Password" value={storeData.password} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="address" placeholder="Store Address" value={storeData.address} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" name="description" placeholder="Store Description" value={storeData.description} onChange={handleInputChange}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-select" name="category" value={storeData.category} onChange={handleInputChange}>
                                            <option value="">Choose Store Category</option>
                                            <option value="electronics">Electronics</option>
                                            <option value="clothing">Clothing & Fashion</option>
                                            <option value="beauty">Beauty & Cosmetics</option>
                                            <option value="furniture">Furniture & Decor</option>
                                            <option value="food">Food & Beverages</option>
                                            <option value="sports">Sports Equipment</option>
                                            <option value="books">Books & References</option>
                                            <option value="gaming">Gaming & Consoles</option>
                                            <option value="office">Office Supplies</option>
                                            <option value="kids">Kids & Toys</option>
                                            <option value="appliances">Home Appliances</option>
                                            <option value="smart-tech">Smart Technology</option>
                                            <option value="crafts">Crafts & DIY</option>
                                            <option value="services">Digital Services</option>
                                            <option value="automotive">Automotive Products</option>
                                        </select>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="reset" className="btn btn-secondary">Reset</button>
                                        <button type="button" className="btn" style={{ backgroundColor: '#865016', color: '#fff' }} onClick={handleSignUp}>
                                            Create Account
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpStore;
