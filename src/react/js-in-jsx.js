/**  Use JavaScript in JSX
 * You could also use JavaScript in JSX. It takes angle brackets (<) as the beginning of HTML syntax,
 * and curly brackets ({) as the beginning of JavaScript syntax.
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
const RootDom= document.getElementById('root');
let JSX = (
    <div>
	{['react','饥人谷','学习'].map(function(name){
		return <div key={name}>Hello, {name}!</div>
	})}
    </div>);

let arrJSX = [
  <h1 key='1'>Hello world!</h1>,
  <h2 key='2'>React is awesome</h2>
];
render(<div>{JSX}{arrJSX}</div>, RootDom);
