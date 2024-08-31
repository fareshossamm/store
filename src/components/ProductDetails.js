import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './ProductDeails.css';
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from 'react-bootstrap'; 
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const [modalMessage, setModalMessage] = useState(''); // State to control the modal message
  const [modalMessageType, setModalMessageType] = useState(''); // State to control the modal message type (success or error)
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    fetch(`${api_url}/${productId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error("Error fetching product:", error);
        setError(error);
      });
  }, [productId]);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const addToCart = () => {
    if (!product) return;

    // Get the current cart from localStorage or initialize it
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const productInCart = cart.find(item => item.id === product.id);

    if (productInCart) {
      // Product already in cart
      setModalMessage(`This product is already in your cart!`);
      setModalMessageType('error'); // Set message type to 'error'
    } else {
      // Add product to cart
      cart.push(product); // Add the current product to the cart
      localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart back to localStorage
      setModalMessage(`This item has been added to your cart!`);
      setModalMessageType('success'); // Set message type to 'success'
    }

    // Show the modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/cart');
  };

  if (error) {
    return <div className="alert alert-danger" role="alert">Error fetching product: {error.message}</div>;
  }

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <img className="details-img img-fluid rounded" src={product.image} alt={product.title} />
        </div>
        <div className="col-lg-6 col-md-12 text mt-4">
          <h2 className="mb-2 mt-5">{product.title}</h2>
          <p className="card-text mb-4">{truncateText(product.description, 400)}</p>
          <div className="rating">
            <span className="rating-text">
              <strong>
                <FontAwesomeIcon className="star" icon={faStar} /> {product.rating.rate}
              </strong>
            </span>
          </div>
          <div className="custom">
            <p><span className="count mt-3">count :</span> {product.rating.count}</p>
            <h3 className="mb-4"><span className="text-danger"> $ </span> {product.price}</h3>
            </div>
            <button className="add btn btn-primary w-100" onClick={addToCart}>Add to Cart <FontAwesomeIcon  icon={faShoppingCart} className=" cart-icon mr-5 " />
            </button>

        </div>
      </div>

      {/* React Bootstrap Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalMessageType === 'error' ? "Product Already in Cart" : "Product Added to Cart"}
          </Modal.Title>
        </Modal.Header>
          <Modal.Body style={{ color: modalMessageType === 'error' ? 'red' : 'green', fontWeight: 'bold' }}>
          {modalMessage}
        </Modal.Body>
         <Modal.Footer>
          <Button variant="" onClick={() => setShowModal(false)}>Continue Shopping</Button>
          <Button variant="" onClick={handleCloseModal}>Go to Cart</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductDetails;
