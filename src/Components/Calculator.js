import React from 'react';
// eslint-disable-next-line import/extensions
import calculate from '../logic/calculate.js';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  render() {
    const clickListener = (e) => {
      const result = calculate(this.state, e.target.value);
      this.setState(result);
    };
    const { total, next, operation } = this.state;
    const result = `${total || ''}${operation || ''}${next || ''}`;
    return (
      <form action="#">
        <div className="text">{result || '0'}</div>
        <div className="calc-btn">
          <input type="button" value="AC" onClick={clickListener} />
          <input type="button" value="+/-" onClick={clickListener} />
          <input type="button" value="%" onClick={clickListener} />
          <input type="button" value="÷" onClick={clickListener} className="sign" />
          <input type="button" value="7" onClick={clickListener} />
          <input type="button" value="8" onClick={clickListener} />
          <input type="button" value="9" onClick={clickListener} />
          <input type="button" value="x" onClick={clickListener} className="sign" />
          <input type="button" value="4" onClick={clickListener} />
          <input type="button" value="5" onClick={clickListener} />
          <input type="button" value="6" onClick={clickListener} />
          <input type="button" value="-" onClick={clickListener} className="sign" />
          <input type="button" value="1" onClick={clickListener} />
          <input type="button" value="2" onClick={clickListener} />
          <input type="button" value="3" onClick={clickListener} />
          <input type="button" value="+" onClick={clickListener} className="sign" />
          <input type="button" value="0" onClick={clickListener} className="zero" />
          <input type="button" value="." onClick={clickListener} />
          <input type="button" value="=" onClick={clickListener} className="sign" />
        </div>
      </form>
    );
  }
}
