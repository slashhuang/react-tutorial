/**state and props
 * React uses state and props to struct a component model
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
const RootDom= document.getElementById('root');
class PropState extends Component{
    constructor(){
        super();
        this.state={a:'I am state'}
    }
    click(){
    	this.setState({
    		a:'我更新啦 哈哈哈'
    	})//=> 更新逻辑
    }
    render(){
        return <div onClick={()=>this.click()}>
                {this.state.a}
                {this.props.b}
                {this.props.c}
              </div>
    }
 };
 class Another extends Component{
 	constructor(){
 		super();
 		this.state={
 			prop1 : '我是another的第一个prop'
 		};
 	}
    click(){
    	this.setState({
			prop1 : '我是another的第而个prop'
    	})
    }
    render(){
        return <div onClick={()=>this.click()}>
        			我在another里面啦
                    <PropState b={this.state.prop1} c="hello" />;
              </div>
    }
 };
render(<Another/>,RootDom);



