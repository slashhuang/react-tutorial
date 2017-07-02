/* JSX
 * The template syntax in React is called JSX. 
 * It is allowed in JSX to put HTML tags directly into JavaScript codes. 
 * ReactDOM.render() is the method which translates JSX into HTML, 
 * and renders it into the specified DOM node.
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
const RootDom= document.getElementById('root');
let JSX = <div>Hello world</div>;
//第一个参数是JSX,第二个参数是对应的dom节点  
render(JSX, RootDom);