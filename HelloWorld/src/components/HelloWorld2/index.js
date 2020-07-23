import React from 'react';

const HelloWorld = (props) => {
  const { text = '' } = props;
  return (
    <div>{`Hello World2! The text is ${text}`}</div>
  );
};

export default HelloWorld;
