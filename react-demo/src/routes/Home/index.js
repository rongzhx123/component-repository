import React, { Component } from 'react';
import { HelloWorld } from 'rzx-hello-world';
import './index.less';

class Home extends Component {
  render () {
    return (
      <div>
        <HelloWorld />
        <div className='img' />
      </div>
    );
  }
}

export default Home;
