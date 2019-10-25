import styled from 'styled-components';
import { usePosition } from 'use-position';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import SignModal from './SignModal';

import LogoImage from './Headers/LogoImage';
import SearchBox from './Headers/SearchBox';
import TopMenuBttons from './headers/TopMenuButtons';

const MainFrame = styled.div`
  position: fixed;
  height: 100px;
  max-width: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: lightgray;
  z-index: 10;
`;

const Header = () => {
  const [show, setShow] = useState(false);
  const showSign = () => {
    setShow(!show);
  };

  return (
    <MainFrame>
      {/* 로고 링크가 작동 안 되는 이유를 모르겠음.   */}
      <LogoImage />
      <SearchBox />
      <TopMenuBttons>
        <button onClick={() => showSign()}>sign</button>
        <SignModal onClose={showSign} show={show}>
          환영합니다
        </SignModal>
        <Link href="/login">
          <a style={{ padding: '10px' }}>login</a>
        </Link>
      </TopMenuBttons>
    </MainFrame>
  );
};

export default Header;
