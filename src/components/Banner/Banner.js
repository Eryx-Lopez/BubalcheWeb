import React, { Component } from "react";
import css from './Banner.module.css';

class Banner extends Component {
  render() {
    const { text } = this.props;
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