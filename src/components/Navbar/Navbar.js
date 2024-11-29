import React, { Component } from "react";
import css from './Navbar.module.css';

class Navbar extends Component {
    render() {
      return (
        <div className={css.banner}>
          <div className={css.text}>
            {text}
          </div>
        </div>
      );
    }
  }
  
  export default Banner;