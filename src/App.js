import './App.css';
import React from 'react';
// eslint-disable-next-line import/extensions
import Calculator from './Components/Calculator.js';

export default class App extends React.PureComponent {
  render() {
    return (
      <Calculator />
    );
  }
}
