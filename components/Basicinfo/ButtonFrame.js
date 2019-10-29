import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.div`
  position: absolute;
  top: 410px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 510px;
  height: 30%;
  font-size: x-large;
  /* background: #f00; */

  margin: auto;
  text-align: center;
`;

const ButtnoFrame = (props) => {
  return <ButtonBox>{props.children}</ButtonBox>;
};

export default ButtnoFrame;
