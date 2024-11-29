import React, { Component } from "react";
import css from "./ProductCard.module.css";
import classNames from "classnames";

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, product } = this.props;

    return (
      <div className={classNames(css.ProductCard, className)}>
        <div className={css.ProductCard_header}>
          <img src={product.image} alt="product_img" />
        </div>
        <div className={css.ProductCard_body}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
        <button className={css.ProductCard_button}>Add to cart</button>
      </div>
    );
  }
}

export default ProductCard;