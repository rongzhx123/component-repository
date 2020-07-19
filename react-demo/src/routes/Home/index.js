import React, { Component } from 'react';
import { HelloWorld, HelloWorld2 } from 'rzx-hello-world';
import './index.less';

class Home extends Component {
  render () {
    return (
      <div>
        <HelloWorld text='test' />
        <HelloWorld2 text='test' />
        <div className='img' />
      </div>
    );
  }
}

export default Home;
