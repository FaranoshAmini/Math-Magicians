// eslint-disable-next-line import/no-extraneous-dependencies
import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const Two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(Two).toString();
  }
  if (operation === '-') {
    return one.minus(Two).toString();
  }
  if (operation === 'x') {
    return one.times(Two).toString();
  }
  if (operation === '÷') {
    try {
      return one.div(Two).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }

  if (operation === '%') {
    try {
      return one.mod(Two).toString();
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  // eslint-disable-next-line linebreak-style
  throw Error(`Unknown operation "${operation}"`);
}
