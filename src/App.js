import './App.css';
import React from 'react';
// eslint-disable-next-line import/extensions
import Calculator from './components/Calculator.js';

export default class App extends React.PureComponent {
  render() {
    return (
      <Calculator />
    );
  }
}
