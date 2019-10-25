import styled from 'styled-components';
import React from 'react';

import LogoImage from './Headers/LogoImage';
import SearchBox from './Headers/SearchBox';
import TopMenuBttons from './headers/TopMenuButtons';
import AfterLogin from './Headers/AfterLogin';

const MainFrame = styled.div`
  position: fixed;
  height:100px;
  max-width: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: lightgray;
  z-index: 10;
`;

const Header = ({ logined }) => {
  let menuButtons = <TopMenuBttons />;

  // 로그인 유무에 따라 바뀜
  // if(!logined){
  //   menuButtons = <TopMenuBttons />
  // }
  // if(logined){
  //   menuButtons = <AfterLogin />
  // }

  return (
    <MainFrame>
      {/* 로고 링크가 작동 안 되는 이유를 모르겠음.   */}
      <LogoImage />
      <SearchBox />
      {menuButtons}
    </MainFrame>
  );
};

export default Header;
