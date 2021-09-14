import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.css';
import App from './App';
import Add from './Add';
import Form from './form/Form';
import Ref from './form/Ref';
import Demo from './form/Demo';

import HelloA from './child/function-props'
import HelloB from './child/class-props'
import Mouse from './render-props'
import withMouse from './higher-order-component'

import DemoA from './setState/demo';
import ShouldComponentUpdate from './components/shouldComponentUpdate'

import Random from './components/random';

import reportWebVitals from './reportWebVitals';

const Position = props => (
  <p> 鼠标当前的位置：{ props.x }, { props.y } </p>
)

const MousePosition =  withMouse(Position)

const First = () => (<p>页面一的内容</p>)

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Add />
    <Form />
    <Ref />
    <Demo />
    <HelloA name="Jack" age={ 19 } />
    <HelloB name="Jack" age={ 19 } color={ ['red', 'blue', 'green'] } fn={ () => console.log('组件通讯') } tag={<p>组件通讯</p>} />
    <Mouse children={ mouse => (<p>鼠标位置：{mouse.x}，{mouse.y}</p>) } />
    {/* <Mouse children={ mouse => (
      <div style={{ width: '50px', height: '50px', backgroundColor: '#000', position: 'absolute', top: mouse.y - 25, left: mouse.x - 25 }}></div>
    ) } /> */}
    <Mouse>
      { mouse => (<div style={{ width: '50px', height: '50px', backgroundColor: '#000', position: 'absolute', top: mouse.y - 25, left: mouse.x - 25 }}></div>)  }
    </Mouse>
    <MousePosition></MousePosition>
    <DemoA></DemoA>
    <ShouldComponentUpdate></ShouldComponentUpdate>
    <Random></Random>

    <Router>
      <Link to="/first">
        页面一
      </Link>
      <Route path="/first" component={ First }></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
