import React from "react";

export default class DemoA extends React.Component {
  state = {
    count: 1
  }
  handleClick = () => {
    // this.setState({
    //   count: this.state.count + 1
    // })
    // console.log('count:', this.state.count) // 1：异步更新数据
    // this.setState({
    //   count: this.state.count + 1
    // })
    // console.log('count:', this.state.count) // 1：异步更新数据
    
    // 推荐语法
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })
    console.log(this.state.count) // 1\3\5...：异步更新数据
    
    this.setState((state, props) => {
      console.log('第二次调用sate：', state)  // { count: 2 }
      return {
        count: state.count + 1
      }
    }, () => { // 页面渲染完成后立即执行 相似于 componentDidUpdate
      console.log('立即执行', this.state.count) // 3
      console.log(document.getElementById('title').innerText) // 3
      document.title = 'React'
    })
    console.log(this.state.count) // 1\3\5...：异步更新数据
  }

  render() {
    console.warn('触发了render')
    return (
      <div>
        <h1 id="title">计数器：{ this.state.count }</h1>
        <button onClick={ this.handleClick }>+1</button>
      </div>
    )
  }
}
