/**state and props
 * React uses state and props to struct a component model
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
const RootDom= document.getElementById('root');
/**
 * 数据源: state + props
 * props: parent ==> child 【pure不能修改】
 * state: 自身维护的数据状态
 */
class PropState extends Component{
    constructor(){
        super();
        this.state={a:'I am state'}
    }
    click(){
        /**
         * setState ==> 本组件重新render
         */
    	this.setState({
    		a:'我更新啦 哈哈哈'
    	})
    }
    render(){
        return <div onClick={()=>this.click()}>
                {this.state.a}
                <A name= {this.state.a} />
              </div>
    }
 };
const A = (props) => {
    return <div>{props.name}</div>
}
render(<PropState/>,RootDom);

/**
 * JSX : xml in JavaScript
 * 1、tagName
 * 2、attributes(props)
 * 3、children
 */
/**
 * 组件化: 
 * 1、函数式组件props => JSX ; 
 * 2、类组件:clas A extends Component;
 */ 
/**
 * 数据源 : state  + props
 * 更新数据: setState
 */







