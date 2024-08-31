import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsList from './components/ProductsList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import ProductDetails from './components/ProductDetails';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import Cart from './components/Cart';
import Sales from './components/Sales';

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Slider />
              <ProductsList />
              <Sales />
            </>
          } />
          <Route path="/online-store" element={
            <>
              <Slider />
              <ProductsList />
              <Sales />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
