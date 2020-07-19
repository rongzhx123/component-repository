import React, { Component } from 'react';

const HelloWorld = (props) => {
  const { text = '' } = props;
  return (
    <div>{`Hello World! the text is ${text}`}</div>
  );
};

export default HelloWorld;
