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
        this.state={
            b:1
        }
    }
	shouldComponentUpdate(){
		console.log('shouldComponentUpdate');
        return true;
	}
	componentWillUnmount(){
		console.log('componentWillUnmount')
	}
	componentDidUpdate(){
		console.log('componentDidUpdate')
	}
	componentWillUpdate(){
		console.log('componentWillUpdate')
	}
	componentWillReceiveProps(){
		console.log('componentWillReceiveProps')
	}
	componentWillMount(){
		console.log('componentWillMount')
	}
	componentDidMount (){
        this.setState({b:1})
		console.log('componentDidMount')
	}
    render(){
    	console.log('render')
    	let a = '3/26'
        return <div>
           	I am a component
           		{a}
                {this.state.b}
            </div>
    }
 };

render(<FirstComponent />,RootDom);
