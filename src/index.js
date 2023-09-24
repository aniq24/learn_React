import React from 'react';
import ReactDOM from 'react-dom';

class Car{

  constructor(name){
    this.brand = name;

  }

  present(){

    return 'I have a ' + this.brand;


  }

}

class Model extends Car{

  constructor(name, mod){
    super(name);
    this.model = mod;

  }

  show(){

    return this.present() + ', and it is a ' + this.model;

  }



}


const mycar = new Model("Ford","Mustang");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(mycar.show());