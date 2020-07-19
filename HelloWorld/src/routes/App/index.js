import React, { Component } from 'react';
import './index.less';

const prefixCls = 'component-repository';

class App extends Component {
  goto = (path) => {
    const { history } = this.props;
    history.push(path);
  }
  
  render () {
    const { data = [] } = this.props;
    return (
      <div className={prefixCls}>
        <div className={prefixCls + '-title'}>组件列表</div>
        {
          data.map((comp, index) => {
            const { path, name } = comp;
            return (
              <a
                key={`${path}-${index}`}
                className={prefixCls + '-component'}
                onClick={() => this.goto(path)}
              >{name}</a>
            )
          })
        }
      </div>
    )
  }
}

export default App;
