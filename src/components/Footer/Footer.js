import React, { Component } from "react";
import css from './Footer.module.css';
import logo from '../../assets/Logos/BubalcheLogo.png';
import { NavLink } from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <footer className={css.footer}>
                <div className={css.left}>
                    <ul className={css.footer_list}>
                        <NavLink to="/designs" className={css.footer_item}>Detalles</NavLink>
                        <NavLink to="/" className={css.footer_item}>Buscar</NavLink>
                        <NavLink to="/designs" className={css.footer_item}>Nosotros</NavLink>
                        <NavLink to="/about" className={css.footer_item}>Contacto</NavLink>
                        <NavLink to="/about" className={css.footer_item}>Ayuda</NavLink>

                    </ul>
                </div>
                <div className={css.center}>
                    <div className={css.center_text}>
                        <p className={css.subtitle}>¿Conoces o eres una organización?</p>
                        <p className={css.subtitle}>¡Ayúdanos a ayudar! Contáctanos</p>
                    </div>
                    <input type="text" placeholder="Escribe tu mensaje" className={css.upper_input}/>
                    <div className={css.lower_input_container}>
                        <input type="text" placeholder="Correo Electrónico" className={css.lower_input}/>
                        <button className={css.send_bttn}>Enviar</button>
                    </div>
                </div>
                <div className={css.right}>
                <img src={logo} alt="Logo" className={css.logo}/>
                </div>
            </footer>
        );
    }
}
  
export default Footer;