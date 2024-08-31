import React from 'react';
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaGift, FaShieldAlt, FaRecycle } from 'react-icons/fa';
import './Services.css';

function Services() {
  return (
    <div className="services-container container my-5">
      <h1 className="services-title text-center mb-5 text-uppercase"><span className='blue'>Our</span> Services</h1>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="service-card text-center">
            <FaShippingFast className="service-icon" />
            <h3 className="service-title">Fast Shipping</h3>
            <p className="service-description">
              Enjoy fast and reliable shipping on all your orders. We ensure that your products reach you as quickly.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="service-card text-center">
            <FaHeadset className="service-icon" />
            <h3 className="service-title">24/7 Customer Support</h3>
            <p className="service-description">
              Our dedicated support team is available around the clock to assist you with any questions or issues you may have.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="service-card text-center">
            <FaMoneyBillWave className="service-icon" />
            <h3 className="service-title">Best Prices</h3>
            <p className="service-description">
              We offer competitive prices on all our products, ensuring you get the best value for your money.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="service-card text-center">
            <FaGift className="service-icon" />
            <h3 className="service-title">Exclusive Offers</h3>
            <p className="service-description">
              Take advantage of our exclusive offers and promotions available only to our loyal customers.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="service-card text-center">
            <FaShieldAlt className="service-icon" />
            <h3 className="service-title">Secure Shopping</h3>
            <p className="service-description">
              Shop with confidence knowing that your information and transactions are secure with us.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="service-card text-center">
            <FaRecycle className="service-icon" />
            <h3 className="service-title">Eco-Friendly Packaging</h3>
            <p className="service-description">
              We use eco-friendly packaging materials to reduce our environmental impact and promote sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
