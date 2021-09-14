import React from "react";

const element_JSX = <h1 className="demo">Hello World</h1>
console.log(element_JSX) // 打印结果相同

const element_create = React.createElement('h1',
  {
    className: 'demo'
  },
  'Hello World'
)
console.log(element_create) // 打印结果相同

export default class JSXDemo extends React.Component {
  render() {
    return null
  }  
}
