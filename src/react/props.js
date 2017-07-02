/**
 * props in react
 * reference https://facebook.github.io/react/docs/components-and-props.html
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
const RootDom= document.getElementById('root');
class Welcome extends Component {
  render() {
    return <div>{this.props.gender } + {this.props.name}</div>
  }
}
/** props.children
 * React uses this.props.children to access a component's children nodes.
 * ==== ! props should be pure ===
 */
class ChildComponent extends Component{
    render(){
        return (
        <div>
            {this.props.children}
            <Welcome gender='male' name='slashhuang' />
        </div>);
    }
 };
render(<ChildComponent>我是个孩子</ChildComponent>,RootDom);