import React, { Component } from "react";
import css from './Modal.module.css';

class Modals extends Component {
    render() {
        return (
            <div className={css.banner_container}>
                <h2>Modals</h2>
                <button>Modal 1</button>
            </div>

          
        );
    }
}

export default Modals