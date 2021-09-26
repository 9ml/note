import React from "react";

export default class Random extends React.Component {
  state = {
    num: 0
  }

  handleClick = () => {
    this.setState(() => {
      return {
        num: Math.floor(Math.random() * 3)
      }
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (nextState.num === this.state.num) {
    //   return false
    // }
    // return true
    return nextState.num !== this.state.num
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1>随机数：{ this.state.num }</h1>
        <button onClick={ this.handleClick }>随机生成</button>
        <NumBox num={ this.state.num } />
      </div>
    )
  }
}

class NumBox extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.num !== this.props.num
  }

  render() {
    console.log('render')
    return (
      <h1>随机数：{ this.props.num }</h1>
    )
  }
}
