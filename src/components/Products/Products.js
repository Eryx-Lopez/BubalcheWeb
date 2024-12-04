import React, { Component } from "react";
import css from './Products.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../utils/products';
import { NavLink } from "react-router-dom";

class Products extends Component {
    render() {
        return (
            <div className={css.ProductComp}>
                <div className={css.header}>
                    <h1>Productos Recientes</h1>
                    <NavLink to="/designs" className={css.button}>Ver más</NavLink>
                </div>

                <div className={css.ProductList}>
                    {products.slice(0, 3).map((product) =>{
                        return <ProductCard key={product.id} product={product} className={css.ProductList_card}/>
                    })}
                </div>
                <div>
                    
                </div>
            </div>
          
        );
    }
}
  
export default Products;