import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./Dice.css";

class Dice extends Component {

  render() {
    return (
        <i className={`Dice fa-solid fa-dice-${this.props.face}`}></i>
    );
  }
}

export default Dice;
