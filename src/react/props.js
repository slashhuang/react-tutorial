/**
 * props in react
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
const RootDom= document.getElementById('root');
const A = (props)=>{
    return <div>{props.gender } + {props.name}</div>
};
render(<A gender='male' name='slashhuang' />,RootDom);


/** props.children
 * React uses this.props.children to access a component's children nodes.
 */
class ChildComponent extends Component{
    render(){
        return <div>{this.props.children}</div>
    }
 };
// render(<ChildComponent>我是个孩子</ChildComponent>,RootDom);