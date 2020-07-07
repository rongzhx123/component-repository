import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
// import { Home } from './routes';

const LoadableHome = Loadable({
  loader: () => import('./routes/Home'),
  loading: () => <div />
});

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' component={LoadableHome} />
        </Switch>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))