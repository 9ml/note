
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import { Button } from 'antd-mobile'

import Home from './pages/Home';
import City from './pages/City';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/home">首页</Link>
        <Link to="/city">城市</Link>
        <Route path="/" render={() => <Redirect to="/home"></Redirect>}></Route>
        <Route path="/home" component={ Home }></Route>
        <Route path="/city" component={ City }></Route>
      </div>
    </Router>
  );
}

export default App;
