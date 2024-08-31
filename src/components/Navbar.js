import React from 'react';
import {Link} from 'react-router-dom'
 import Logo from './Imgs/logo.png'
import './NavBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5">
        <div className="container">
        <img src={Logo} className=" logo " alt="..."/>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav">
                <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav">
                <Link className="nav-link" to={'/about'}>About</Link>
              </li>
              <li className="nav">
                <Link className="nav-link" to={'/services'}>services</Link>
              </li>
              <li className="nav">
                <Link className="nav-link" to={'/contact'} >contact us</Link>
              </li>
              <Link className="nav-link" to={'/cart'} >
                <FontAwesomeIcon  icon={faShoppingCart} className=" cart mr-5 " />
              </Link>
        
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
