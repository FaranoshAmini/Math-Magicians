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
              <Link className="a" to="/">Home</Link>
              <hr />
              <Link className="a" to="/Calculator">Calculator</Link>
              <hr />
              <Link className="a" to="/Quote">Qoute</Link>
            </nav>
          </div>
          <section className="section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Calculator" element={<Calculator />} />
              <Route path="Quote" element={<Quote />} />
            </Routes>
          </section>
        </div>
      </>
    );
  }
}
