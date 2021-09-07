import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Add from './Add';
import Form from './form/Form';
import Ref from './form/Ref';
import Demo from './form/Demo';

import HelloA from './child/function-props'
import HelloB from './child/class-props'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Add />
    <Form />
    <Ref />
    <Demo />
    <HelloA name="Jack" age={ 19 } />
    <HelloB name="Jack" age={ 19 } color={ ['red', 'blue', 'green'] } fn={ () => console.log('组件通讯') } tag={<p>组件通讯</p>} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
