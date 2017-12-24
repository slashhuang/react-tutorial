const rootNode = document.getElementById('root');
import React from 'react';
import ReactDom from 'react-dom';

// const helloWorldJsx = <span>ddd</span>


// functional component
const Factory = (props) => {
    return (
        <div>{props.name}</div>
    );
};

// JSX component + properties(props) [vm]
const helloWorldJsx = <Factory name={'slashhuang'} />; // ===> Factory({name: 'slashhuang'})

// class component [props + state] + setState
// React.PureComponent
class A extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.list.map((val) => {
                        return <li>{val}</li>
                    })
                }
            </ul>
        );
    }
}

class B extends React.Component{
    constructor() {
        super();
        this.state = {
            list: [],
            currrentVal: '',
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.uploadScreen = this.uploadScreen.bind(this);
    }
    onChangeHandler(event) {
        this.setState({
            currrentVal: event.target.value,
        });
    }
    uploadScreen() {
        let list = this.state.list;
        let newList = list.concat([this.state.currrentVal]);
        this.setState({
            list: newList,
            currrentVal: '',
        });
    }
    render () {
        return (
            <div className="hello">
                <input value={this.state.currrentVal} onChange={this.onChangeHandler}/>
                <button onClick={this.uploadScreen}>上屏</button>
                <A list={this.state.list}/>
            </div>
        )
    }
}
ReactDom.render(<B/>, rootNode);
