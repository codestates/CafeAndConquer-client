import React from 'react';
import Link from 'next/link';
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

const AfterLogin = (props) => {
  return (
    <TopMenuBtton>
      <Link href="/">logout</Link>
    </TopMenuBtton>
  );
};

export default AfterLogin;
