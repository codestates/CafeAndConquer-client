import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import SignModal from '../SignModal';

const TopMenuBtton = styled.div`
  position: absolute;
  top: 35%;
  left: 70%;
  height: 30px;
  width: 25%;
  /* border: 1px solid black; */
  text-align: center;
`;

const TopMenuButtons = () => {
  const [show, setShow] = useState(false);
  const showSign = () => {
    setShow(!show);
  };
  return (
    <TopMenuBtton>
      <button onClick={() => showSign()}>sign</button>
      <SignModal onClose={showSign} show={show}>
        환영합니다
      </SignModal>
      <Link href="/login">
        <button style={{ margin: '10px' }}>login</button>
      </Link>
    </TopMenuBtton>
  );
};

export default TopMenuButtons;
