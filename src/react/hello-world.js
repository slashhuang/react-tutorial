/**
 * 第一个应用 hello world
 */
import React,{ Component } from 'react';
// react-native ios/android
import reactDom from 'react-dom';

// 把类似html的代码编译成 ==> JSX
reactDom.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
/**
 * tagname
 * attributes
 * children
 */


{/*<h1>Hello, world!</h1> === 
_react2.default.createElement(
  'h1',
  null,
  'Hello, world!'
)*/}