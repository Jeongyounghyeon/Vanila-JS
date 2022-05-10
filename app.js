const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
  squ: function (a, b) {
    return a ** b;
  },
};

const addResult = calculator.add(2, 3);
const substractResult = calculator.sub(addResult, 10);
const mulipleResult = calculator.mul(10, substractResult);
const divideResult = calculator.div(mulipleResult, addResult);
const squeredResult = calculator.squ(divideResult, substractResult);
