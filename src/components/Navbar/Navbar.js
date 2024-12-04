import React, { Component } from "react";
import css from './Navbar.module.css';
import logo from '../../assets/Logos/BubalcheLogo.png';
import letras from '../../assets/Logos/BubalcheLetra.png';
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
      return (
        <nav className={css.navbar}>
          <div className={css.upper_navbar}> 
            <div className={css.logos_container}>
              <img src={logo} alt="Logo" className={css.logo}/>
              <img src={letras} alt="Bubalche" className={css.logo_letra}/>
            </div>
    
            <input type="text" placeholder="Buscar" className={css.search_bar}/>
            <div className={css.icons}> 
            <FaUser size={30}/>
            <FaCartShopping size={30} className={css.icon}/>
            </div>
          </div>
          <ul className={css.lower_navbar}>
            <li className={css.navbar_item}>
              <NavLink to="/">Inicio</NavLink>

            </li>
            <li className={css.navbar_item}>
              <NavLink to="/designs">Diseños</NavLink>
            </li>
            <li className={css.navbar_item}>
              <NavLink to="/org">Organizaciones</NavLink>
            </li>
            <li className={css.navbar_item}>
              <NavLink to="/about">Nosotros</NavLink>
            </li>
            <li className={css.navbar_item}>
              <NavLink to="/cart">Carrito</NavLink>
            </li>
          </ul>

        </nav>
      );
    }
  }
  
  export default Navbar;