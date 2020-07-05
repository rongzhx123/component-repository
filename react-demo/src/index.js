import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter } from 'react-router-dom';
import { Home } from './routes';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))