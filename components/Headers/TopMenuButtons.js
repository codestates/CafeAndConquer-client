import React, { useState } from 'react';
import styled from 'styled-components';

const TopMenuBtton = styled.div`
  position: absolute;
  top: 35%;
  left: 70%;
  height: 30px;
  width: 25%;
  /* border: 1px solid black; */
  text-align: center;
`;

const TopMenuButtons = (props) => {
  return (
    <TopMenuBtton>
        {props.children}
    </TopMenuBtton>
  );
};

export default TopMenuButtons;
