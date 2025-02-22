import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../components/HomePageCom/Header/Matjari.png'; // Ensure you change the path to the correct logo path

const LoginUser = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleSignUp = () => {
        navigate('/signup/user'); // Redirect user to the sign-up page as a user
    };

    const handleLogin = () => {
        console.log(loginData);
        // Here you can add the login logic (e.g., making a request to the server)
        navigate('/user/home'); // Redirect user to the homepage after login
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
                                <h2 className="h1 mb-4">Login as a User</h2>
                                <p className="lead m-0" style={{ color: '#000' }}>
                                    Log in to enjoy our services
                                </p>
                            </div>
                        </div>
                        {/* Form */}
                        <div className="col-12 col-md-6" style={{ backgroundColor: '#F5F5F5' }}>
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <h3 className="mb-4 text-center">Login</h3>
                                <form>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Username or Email"
                                            value={loginData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Password"
                                            value={loginData.password}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button
                                            type="button"
                                            className="btn"
                                            style={{ backgroundColor: '#865016', color: '#fff' }}
                                            onClick={handleLogin}
                                        >
                                            Log In
                                        </button>
                                    </div>
                                </form>
                                <p className="text-center mt-3">
                                    Don't have an account?{' '}
                                    <span
                                        onClick={handleSignUp}
                                        style={{ color: '#865016', cursor: 'pointer' }}
                                    >
                                        Create an Account
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginUser;
