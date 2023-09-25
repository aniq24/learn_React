import React from 'react';
import ReactDOM from 'react-dom';

let hello = val => 'Hello' + val;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(hello(" World!"));