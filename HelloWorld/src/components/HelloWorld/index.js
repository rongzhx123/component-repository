import React, { Component } from 'react';

const HelloWorld = (props) => {
  const { text = '' } = props;
  return (
    <div>{`Hello World dev! The text is ${text}`}</div>
  );
};

export default HelloWorld;
