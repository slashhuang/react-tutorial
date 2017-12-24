/** Redux
 * 数据处理方案
 * store
 * action
 * reducer
 */

// ETL => extract transform  load
// UI1 ===onClick==> UI2 ===onChange==> UI3
// onClick 触发一个行为 【action】
// action(带数据过来) ===> 更新(reduce store1=>store2) ==> 数据存储【store】
// 【store】 ==react==> 新的view


// redux: action => reduce => store

// react-redux: 结合store => react

// react: render 新的view

// redux
import { createStore } from 'redux';
const store = createStore((state, action) => {
    if (action.type === 'test') {
        return {
            name: action.name,
        };
    } else {
        return state;
    }
   
}, {name: "slash"});
// react
import React from 'react';
import ReactDom from 'react-dom';
class A extends React.Component{
    constructor() {
        super();
        this.state = {
            name: 'dddd'    
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            let reduxState = store.getState();
            this.setState({
                name: reduxState.name,
            });
        });
    }
    render() {
        return (
            <div onClick={() => {
                store.dispatch({
                    type: "test",
                    name: Math.random(),
                });
            }}>
                {
                    this.state.name
                }
            </div>
        )
    }
}
const rootNode = document.getElementById('root');
ReactDom.render(<A />, rootNode);



