import React from 'react'

export default class Lifecycle extends React.Component {
  /** 1：
   * 创建组件时最先执行
   * 1. 初始化 state
   * 2. 绑定 this 执行
   * 
   */
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.warn('生命周期钩子函数：constructor')
  }

  /** 3：
   * 组件挂载 完成 DOM 渲染后触发
   * 1. 操作 DOM
   * 2. 发送网络请求
   * 
   */
  componentDidMount() {
    let btn = document.getElementById('btn')
    console.log(btn)
    console.warn('生命周期钩子函数：componentDidMount')
  }

  handleClick = () => {
    /** 4.1：
     * setState 触发组件更新状态
     */
    this.setState({
      count: this.state.count + 1
    })
  }

  /** 2：
   * 每次组件渲染都会触发
   * 渲染 UI
   * 不能在此使用 this.setState() 方法
   * 
   */
  render() {
    console.warn('生命周期钩子函数：render')
    return (
      <div>
        {
          this.state.count > 3 ? <p>豆豆被打死了</p> : <Child count={ this.state.count } />
        }
        <button id="btn" onClick={ this.handleClick }>打豆豆</button>
        {/* 4.3： this.forceUpdate() 强制组件更新 */}
        <button onClick={ () =>  this.forceUpdate() }>强制更新</button>
      </div>
    )
  }

  /**
   * 5：
   * 更新渲染完成后触发
   * 1. 操作 DOM
   * 2. 发送网络请求
   * 注意：如果要是有 setState() 更新状态，必须要放在一个 if 条件中
   * 如果直接调用 setState() 更新状态，也会导致递归更新问题
   */
  componentDidUpdate(pervPops) {
    let btn = document.getElementById('btn')
    console.log(btn)
    console.warn('生命周期钩子函数：componentDidUpdate')

    // 通常做法：比较更新后得 props 是否相同，来判断是否重新渲染组件
    console.log('更新前的 props：' + pervPops, '更新后的 porps：' + this.props)
    if(pervPops.count !== this.props.count) {
      // this.setState({})
      // 发送网络请求
    }
  }
}

class Child extends React.Component {
  render() {
    console.warn('子组件 --- 生命周期钩子函数：render')
    return (
      /** 4.2：
       * new props 触发组件更新状态
       */
      <div>统计次数：{ this.props.count }</div>
    )
  }

  /**
   * 6：
   * 组件卸载时（从页面中消失时）触发
   * 执行清理工作，如定时器等。
   */
  componentWillUnmount() {
    console.warn('子组件 --- 生命周期钩子函数：componentWillUnmount')
  }
}
