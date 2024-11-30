import React, { Component } from "react";
import css from './Footer.module.css';
import logo from '../../assets/Logos/BubalcheLogo.png';


class Footer extends Component {
    render() {
        return (
            <footer className={css.footer}>
                <div className={css.left}>
                    <ul className={css.footer_list}>
                        <li className={css.footer_item}><a href="#informacion">Informacion</a></li>
                        <li className={css.footer_item}><a href="#buscar">Buscar</a></li>
                        <li className={css.footer_item}><a href="#nosotros">Sobre Nosotros</a></li>
                        <li className={css.footer_item}><a href="#contacto">Contacto</a></li>
                        <li className={css.footer_item}><a href="#ayuda">Ayuda</a></li>
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