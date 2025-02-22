import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; // تأكد من استيراد مكتبة الأيقونات

const About = () => {
  return (
    <section className="py-5 border-bottom" id="about">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bolder" style={{ color: 'black' }}>About Our Platform</h2>
          <p className="lead mb-0" style={{ color: 'black' }}>
            Discover the features and benefits of our innovative platform
          </p>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-6">
            {/* About the Platform 1 */}
            <div className="card mb-4">
              <div className="card-body p-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <i className="bi bi-info-circle fs-1" style={{ color: '#865016' }}></i>
                  </div>
                  <div className="ms-4">
                    <p className="mb-1" style={{ color: 'black' }}>
                      Our platform is designed to provide a seamless shopping experience. Whether you're a user looking for your favorite products or a store owner looking to expand your reach, we have the tools you need to succeed.
                    </p>
                    <div className="small text-muted" style={{ color: 'black' }}>- Our Platform</div>
                  </div>
                </div>
              </div>
            </div>
            {/* About the Platform 2 */}
            <div className="card mb-4">
              <div className="card-body p-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <i className="bi bi-people fs-1" style={{ color: '#865016' }}></i>
                  </div>
                  <div className="ms-4">
                    <p className="mb-1" style={{ color: 'black' }}>
                      We bring together multiple stores into one platform, allowing customers to shop from a wide variety of products in one place. Our AI-powered search makes finding the right product quick and easy, whether by text or image search.
                    </p>
                    <div className="small text-muted" style={{ color: 'black' }}>- Seamless Experience</div>
                  </div>
                </div>
              </div>
            </div>
            {/* About the Platform 3 */}
            <div className="card">
              <div className="card-body p-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <i className="bi bi-gear fs-1" style={{ color: '#865016' }}></i>
                  </div>
                  <div className="ms-4">
                    <p className="mb-1" style={{ color: 'black' }}>
                      Our platform is constantly evolving, and we are committed to providing the best possible experience for both customers and store owners. With real-time tracking, multiple payment options, and personalized recommendations, we make online shopping easy and enjoyable.
                    </p>
                    <div className="small text-muted" style={{ color: 'black' }}>- Always Evolving</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
