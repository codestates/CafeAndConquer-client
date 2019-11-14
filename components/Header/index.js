import styled from 'styled-components';
import React from 'react';

import LogoImage from './LogoImage';
import InputBox from './InputBox';
import TopMenuBttons from './TopMenuButtons';
import AfterLogin from './AfterLogin';

const MainFrame = styled.div`
  position: absolute;
  height: 90px;
  max-width: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgb(72 66 73);
  z-index: 1;
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
      <LogoImage />
      <InputBox />
      {menuButtons}
    </MainFrame>
  );
};

export default Header;
