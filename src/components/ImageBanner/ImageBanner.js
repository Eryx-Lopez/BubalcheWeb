import React, { Component } from "react";
import css from './ImageBanner.module.css';
import BannerImage from '../../assets/Productos/LoboMexicano.png';

class ImageBanner extends Component {
    render() {
        const { title, text, button_text } = this.props;
        return (
            <div className={css.banner_container}>
                <div className={css.left_banner}>
                    <div className={css.title}> { title } </div>
                    <div className={css.text}> { text } </div>
                    <button className={css.button}>{ button_text }</button>
                </div>
                <div className={css.right_banner}>
                    <img src={BannerImage} alt="Producto de temporada"/>
                </div>
            </div>

          
        );
    }
}
  
export default ImageBanner;