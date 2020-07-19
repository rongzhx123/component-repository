import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter } from 'react-router-dom';
import * as AllComponent from './components';
import App from './routes/App';

class Main extends Component {
  state = {
    components: []
  }

  componentDidMount () {
    let components = [];
    for (let key in AllComponent) {
      let path = key.replace(/([A-Z])/g,"_$1").toLowerCase();
      if (path[0] === '_') {
        path = path.slice(1);
      }
      path = '/' + path;
      components.push({
        name: key,
        path,
        component: AllComponent[key]
      })
    }
    this.setState({components});
  }

  render () {
    const { components } = this.state;
    return (
      <HashRouter>
        <Switch>
          {
            components.map((comp, index) => {
              const { path, component } = comp;
              return (
                <Route path={path} component={component} key={`${path}-${index}`} />
              )
            })
          }
          <Route
            path='/'
            render={props => <App {...props} data={components} />}
          />
        </Switch>
      </HashRouter>
    )
  }
}
ReactDOM.render(<Main />, document.getElementById('root'))