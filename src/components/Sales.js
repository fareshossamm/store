import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is included
import Image1 from './Imgs/sales1.jpg';
import Image2 from './Imgs/sales2.jpg';
import Image3 from './Imgs/sales3.jpg';
import './Sales.css'; // Ensure this file contains any custom styles

function Sales() {
  return (
    <div id="salesCarousel" className="carousel slide mb-1">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#salesCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#salesCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#salesCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item ">
          <img src={Image1} className="d-block w-100 sale" alt="Sale Item 1" />
        </div>
        <div className="carousel-item">
          <img src={Image2} className="d-block w-100 sale" alt="Sale Item 2" />
        </div>
        <div className="carousel-item active">
          <img src={Image3} className="d-block w-100 sale" alt="Sale Item 3" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#salesCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#salesCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Sales;
