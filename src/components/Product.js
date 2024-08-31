import React from "react";
import "./ProductsList.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Product(props) {
  const { product, showButton = true } = props;

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) : text;
  };

  return (
    <Link className="card h-100" to={`/product/${product.id}`}>
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{truncateText(product.title, 20)}</h5>
        <p className="card-text">{truncateText(product.description, 300)}</p>
        <p className="card-text">
        </p>
        <h3 className=" mb-2 dollar"> <span className="text-danger"> $</span>{product.price}</h3>

        <div className="rating">
          <span className="rating-text">
            <strong >
              <FontAwesomeIcon className="star" icon={faStar} /> {product.rating.rate} 
            </strong>
          </span>
        </div>
        
      </div>
    </Link>
  );
}

export default Product;
