import React, { useState, useEffect } from "react";
import { getProducts } from "../../service/ApiProducts";
import "./style.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);

  console.log(products);

  return (
    <div>
      <div className="container-products">
        {products?.map(
          ({ title, price, image }, index) =>
            index <= 3 && (
              <div key={index} className="container-row-products">
                <img src={image} />
                <h2>{title}</h2>
                <p>R${price}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Products;
