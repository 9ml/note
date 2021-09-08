
import React from 'react'

export default class ShouldComponentUpdate extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  // 钩子函数
  shouldComponentUpdate(nextProps, nextState) {
    console.log('最新的props:', nextProps)
    console.log('最新的state:', nextState) // 最新的状态
    console.log('最新的state:', this.state.count) // 更新前的状态
    if (nextState.count === this.state.count) {
      // 返回 false 阻止组件重新渲染
      return false
    }
    return true
  }

  render() {
    console.log('组件更新了')
    return (
      <div>
        <Child />
        <h1>计数器：{ this.state.count }</h1>
        <button onClick={ this.handleClick }>++++++++++++++++++++</button>
      </div>
    )
  }
}

class Child extends React.Component {
  render() {
    console.log('子组件更新了')
    return (
      <p>子组件</p>
    )
  }
}
