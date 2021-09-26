import React from "react"
import PropTypes from 'prop-types'

// 创建 Mouse 组件
export default class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  // 鼠标移动事件处理程序
  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  // 监听鼠标移动事件
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  // 组件卸载时移除事件绑定
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  render() {
    return this.props.children(this.state)
  }
}

Mouse.propType = {
  children: PropTypes.func.isRequired
}
