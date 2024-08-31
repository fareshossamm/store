import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons
import './ContactUs.css'; // Make sure to add the relevant CSS
import ConatctImage from './Imgs/contact.svg'; // Adjust the path to your SVG file

function ContactUs() {
  return (
    <div className="contact-us container my-5">

      <div className="contact-content row">
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
        <div className='about-image'>
          <img className='m-lg-3 contact-img' src={ConatctImage} alt='contact Us' />
        </div>
        </div>

        {/* Contact Form Section */}
        <div className="col-lg-6 forms">
          <div className="contact-form m-lg-5">
            <form>
              <div className="form-group">
                <input type="text" id="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea id="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn d-d-block w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-info text-center mt-4">
      <h1 className='text-uppercase mb-2'>Contact <span className='blue'>Us</span></h1>
      <p><FaEnvelope className='blue' /> support@example.com</p>
        <p><FaPhone className='blue' /> +1 (234) 567-890</p>
      </div>
    </div>
  );
}

export default ContactUs;
