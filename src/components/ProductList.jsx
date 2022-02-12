import React from "react";
import { Product } from ".";

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="product-list__content">
        <h2 className="product-list__title">Create & inspire. It's Me</h2>
        <div className="product-list__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          earum, libero adipisci a, sit repudiandae, hic impedit nam animi
          veritatis illo! <br />
          Ea voluptatum assumenda laborum repellendus necessitatibus quisquam
          itaque sed.
        </div>
      </div>
      <div className="product-list__list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
