/**  Use JavaScript in JSX
 * You could also use JavaScript in JSX. It takes angle brackets (<) as the beginning of HTML syntax,
 * and curly brackets ({) as the beginning of JavaScript syntax.
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
const RootDom= document.getElementById('root');
let a = 1;
let jsx1 = <div>{a}</div>;
let b = { id : 2};
let jsx2 = <div>{b.id}</div>;
let jsx3 = ['i','love','react'].map((name) => {
    return <div>{name}</div>
});
render(<div>
    {jsx1}{jsx2}{jsx3}
    </div>, RootDom);
