import React from 'react';
import './About.css';
import AboutImage from './Imgs/about.svg'; 
function About() {
  return (
    <div className='about mt-5'>
      <h1 className='about-title'>About<span className='blue'> Us</span> </h1>
      <div className='about-content'>
        <div className='about-image'>
          <img src={AboutImage} alt='About Us' />
        </div>
        <div className='about-text'>
          <p>
            Welcome to our e-commerce website. We are dedicated to providing you with the best products and services. Our mission is to offer high-quality products at affordable prices, ensuring customer satisfaction.
          </p>
          <p>
            Our team is passionate about what we do and we constantly strive to improve our offerings. We believe in building lasting relationships with our customers and providing exceptional support. Thank you for choosing us!
          </p>
          <p>
            We source our products from trusted suppliers and ensure that each item meets our stringent quality standards. Our goal is to make your shopping experience as seamless and enjoyable as possible. If you have any questions or need assistance, our customer support team is here to help.
          </p>
        </div>
      </div>
      {/* <footer className='footer'>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p>
          <a href='/privacy-policy'>Privacy Policy</a> | <a href='/terms-of-service'>Terms of Service</a>
        </p>
      </footer> */}
    </div>
  );
}

export default About;
