import React from 'react';
import styled from 'styled-components';

const MainLogo = styled.p`
  font-family: Monospace, Helvetica, sans-serif;
  position: absolute;
  font-size: 4.5rem;
  color: black;
  width: 100%;
  top: 25%;
  margin: 0 auto;
  text-align: center;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
`;
const MainInfo = styled.p`
  font-family: Monospace, Helvetica, sans-serif;
  position: absolute;
  font-size: 2.5rem;
  color: black;
  width: 100%;
  top: 45%;
  margin: 0 auto;
  text-align: center;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
`;

const Title = () => {
  return (
    <div>
      <MainLogo>Cafe&Conqeur</MainLogo>
      <MainInfo>카페를 발견하고 등록하세요</MainInfo>
    </div>
  );
};

export default Title;
