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
        <div className={css.ProductCard_image}>
          <img src={product.image} alt="product_img"/>
        </div>
        
        <div className={css.ProductCard_body}>
          <h3 className={css.description_Title}>{product.name}</h3>
          <p className={css.description}>{product.description}</p>
        </div>

        <div className={css.ProductCard_price}>
        <p>{product.price}</p>
        <button className={css.ProductCard_button}>Añadir</button>
        </div>
      </div>
    );
  }
}

export default ProductCard;