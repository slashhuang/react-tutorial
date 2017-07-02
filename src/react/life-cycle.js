/** 
 * https://facebook.github.io/react/docs/state-and-lifecycle.html
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
