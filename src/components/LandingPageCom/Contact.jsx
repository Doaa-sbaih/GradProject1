import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكن إضافة التحقق من صحة البيانات أو إرسالها إلى الخادم
    setFormStatus('success');
  };

  return (
    <section className="bg-light py-5" id="contact">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <div className="feature text-white rounded-3 mb-3">
            <i className="bi bi-envelope" style={{ fontSize: '3rem', color: 'black' }}></i>
          </div>
          <h2 className="fw-bolder">Get in touch</h2>
          <p className="lead mb-0" style={{ color: 'black' }}>
            We'd love to hear from you
          </p>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-6">
            <form id="contactForm" onSubmit={handleSubmit}>
              {/* Name input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Full name</label>
              </div>

              {/* Email address input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email address</label>
              </div>

              {/* Phone number input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phone">Phone number</label>
              </div>

              {/* Message input */}
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Enter your message here..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ height: '10rem' }}
                  required
                />
                <label htmlFor="message">Message</label>
              </div>

              {/* Submit button */}
              <div className="d-grid">
                <button
                  className="btn btn-lg"
                  id="submitButton"
                  type="submit"
                  disabled={formStatus === 'success'}
                  style={{ backgroundColor: '#865016', borderColor: '#865016', color: 'white' }}
                >
                  Submit
                </button>
              </div>

              {/* Success Message */}
              {formStatus === 'success' && (
                <div className="text-center mt-3 text-success">
                  <div className="fw-bolder">Form submission successful!</div>
                </div>
              )}

              {/* Error Message */}
              {formStatus === 'error' && (
                <div className="text-center mt-3 text-danger">
                  <div className="fw-bolder">Error sending message!</div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
