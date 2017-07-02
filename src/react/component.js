/** Define a component
 * a component class, 
 * which implements a render method to return an component instance of the class. 
 * You don't need to call new on the class in order to get an instance, j
 * ust use it as a normal HTML tag.
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
const RootDom= document.getElementById('root');
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
