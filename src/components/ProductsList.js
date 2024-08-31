import { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductsList.css";


function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All'); 

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductCat = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      getProducts();
    } else {
      getProductCat(category);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h1 className="text-center mt-5 mb-5 text-uppercase">
        <span className="blue">Our</span> Products
      </h1>
      <div className="container">
        <div className="button-container">
          <button
            onClick={() => handleCategoryClick('All')}
            className={`btn m-2 ${activeCategory === 'All' ? 'active' : ''}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`btn m-2 ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="row mb-5">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 mt-4">
              <Product product={product} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
