/** 
 * Define a component a component class, 
 *
 * reference: https://facebook.github.io/react/docs/components-and-props.html
 * 
 * All React components must act like pure functions with respect to their props.
 * 
 * what is the difference between functional component and class component
 * 
 * reference: https://stackoverflow.com/questions/35953840/reactjs-what-is-the-difference-between-functional-component-and-class-component
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
const RootDom= document.getElementById('root');
/**
 * pure functional components 
 * it must never modify its own props
 */
const A = (props)=>{
    return <div>{props.gender } + {props.name}</div>
};
// render(<A gender='male' name='slashhuang'/>,RootDom);

// tagname  A, ==> 不是传统的html标签，而是个函数
// attributes {   ==> 函数的情况下 attributes === props
//     gender:'male',
//     name: "slashhuang"
// }
// children: null

/**
 * class components
 * - Adding Local State to a Class
 * - Adding Lifecycle Methods to a Class
 */

class FirstComponent extends Component{
    constructor(){
        super();
        this.state = {
            b: 1
        }
    }
    render(){
        return (
            <div>
                I am a component
                {this.state.b}
            </div>);
    }
 };

render(<FirstComponent />,RootDom);
