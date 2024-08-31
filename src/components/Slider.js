import Image1 from './Imgs/slider3.jpg';
import Image2 from './Imgs/slider9.jpg';
import Image4 from './Imgs/slider1.jpg';
import Image3 from './Imgs/slider8.jpg';

import './Slider.css';

function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Image4} className="d-block w-100  photo" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={Image1} className="d-block w-100 photo" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={Image2} className="d-block w-100 photo" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={Image3} className="d-block w-100 photo" alt="Slide 4" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
