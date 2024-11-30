import React, { Component } from "react";
import css from './Banner.module.css';

class Banner extends Component {
  render() {
    const { title, text, button_text } = this.props;
    return (
      <div className={css.banner}>
        <div className={css.title}>
          { title }
        </div>
        <div className={css.text}>
          { text }
        </div>
        <button className={css.button}>{ button_text }</button>
        
      </div>
    );
  }
}

export default Banner;