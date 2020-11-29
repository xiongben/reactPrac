import React, { Component } from 'react';
import "./strategyMode"
import "./compositePattern"
import "./decoratorPattern"
import "./chainPattern"
import "./subscribePattern"

let ModeModel = ()=>(
    <div>
        <h1>mode demo</h1>
    </div>
)


// single mode
var CreateDiv = function (html) {
   this.html = html;
   this.init();
}

CreateDiv.prototype.init = function () {
   var div = document.createElement('div');
   div.innerHTML = this.html;
   // document.body.appendChild(div);
}

var ProxySingletonCreateDiv = (function () {
   var instance;
   return function (html) {
       if(!instance){
           instance = new CreateDiv(html);
       }
       return instance;
   }
})()

var a = new ProxySingletonCreateDiv('test1')
var b = new ProxySingletonCreateDiv('test2')
// console.log(a === b);



export default ModeModel;
