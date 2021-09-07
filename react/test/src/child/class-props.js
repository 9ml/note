import React from 'react'

export default class HelloB extends React.Component {
  // 推荐使用 props 作为 constructor 的参数，否则无法在构造函数中使用 props
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    console.log('类组件：', this.props)
    return (
      <div>props：{`${this.props.name}&${this.props.age}`}</div>
    )
  }
}
