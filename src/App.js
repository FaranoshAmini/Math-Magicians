import './App.css';
import React from 'react';
// eslint-disable-next-line import/extensions
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Calculator from './Components/Calculator';
import Quote from './Components/Quote';

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <div className="App">
          <div className="Top">
            <h1 className="Title">Math Magicians</h1>
            <nav className="Nav">
              <Link className="list" to="/">Home</Link>
              <hr />
              <Link className="list" to="/Calculator">Calculator</Link>
              <hr />
              <Link className="list" to="/Quote">Qoute</Link>
            </nav>
          </div>
          <section className="section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route className="layout" path="Calculator" element={<Calculator />} />
              <Route path="Quote" element={<Quote />} />
            </Routes>
          </section>
        </div>
      </>
    );
  }
}
