import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../components/HomePageCom/Header/Matjari.png';

const SignUpUser = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSignUp = () => {
        console.log(userData);
        navigate('/user/home');
    };

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
                                    style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                                />
                                <hr className="border-primary-subtle mb-4" />
                                <h2 className="h1 mb-4">Create an Account as a User</h2>
                                <p className="lead m-0" style={{ color: '#000' }}>
                                    Sign up easily and start using our services.
                                </p>
                            </div>
                        </div>
                        {/* Form */}
                        <div className="col-12 col-md-6" style={{ backgroundColor: '#F5F5F5' }}>
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <h3 className="mb-4 text-center">Create a User Account</h3>
                                <form>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            placeholder="Username"
                                            value={userData.username}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                            value={userData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Password"
                                            value={userData.password}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            value={userData.confirmPassword}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="reset" className="btn btn-secondary">Reset</button>
                                        <button
                                            type="button"
                                            className="btn"
                                            style={{ backgroundColor: '#865016', color: '#fff' }}
                                            onClick={handleSignUp}
                                        >
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

export default SignUpUser;

