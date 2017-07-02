传统方式:
<div data-id='1'>
    hello world
</div>

vue [MVVM]:
<div data-id="{{id}}">
    {{name}}
</div>
{
    data: ()=>{
        return {
            name: "hello world",
            id: 1
        }
    }
}
====> 数据和模板分离 ===>
react [MVVM]

var JSX = <div data-id='1'>
    hello world
</div>;
render(JSX,document.getElementById('root'));


