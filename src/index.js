import React from 'react';
import ReactDOM from 'react-dom';

function basicCalculation(x,y){

  const add = x + y;
  const subtract = x - y;
  const multiply = x * y;
  const divide = x / y;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = basicCalculation(4,2);
let result = (<div>
                <p>Sum: {add}</p>
                <p>Subtract: {subtract}</p>
                <p>Multiply: {multiply}</p>
                <p>Divide: {divide}</p>
              </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(result);