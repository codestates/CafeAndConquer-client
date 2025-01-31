import styled from 'styled-components';
import React, {useEffect} from 'react';
import { usePosition } from 'use-position';
import Link from 'next/link';
import Router from 'next/router';

import Title from './Title';
import ButtonFrame from './ButtonFrame';

const MainFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-image: url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  display: block;
  overflow: hidden;
`;

const CurrentLocation = styled.a`
  position: relative;
  display: inline-block;
  top: 0px;
  left: 0px;
  width: 150px;
  height: 100px;
  padding: 8px;
  margin: 0px 40px;
  color: #fff;
  border: 3px solid #fff;
  text-align: center;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  &hover :active {
    background-color: #fff;
    color: #000;
  }
`;

const RegisterCafe = styled.a`
  position: relative;
  display: inline-block;
  top: 0px;
  left: 0px;
  width: 150px;
  height: 100px;
  padding: 8px;
  margin: 0px 40px;
  color: #fff;
  border: 3px solid #fff;
  text-align: center;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  &hover :active {
    background-color: #fff;
    color: #000;
  }
`;

const InnerP = styled.p`
  position: relative;
  top: 10px;
`;

export default function BasicInfo() {
  const { latitude, longitude, error } = usePosition();

  let position = {
    lat: latitude,
    lng: longitude,
    err: error,
  };
  
  let registerCafeHandler = () => {
    if (latitude && longitude) {
      Router.push({
        pathname: '/register',
        query: { lat: latitude, lng: longitude },
      });
    } else {
      console.log('로딩중..')
    }
  };

  return (
    <MainFrame>
      <Title />
      <ButtonFrame>
        <CurrentLocation onClick={() => currentLocationHandler(position)}>
          <InnerP>가까운 카페</InnerP>
        </CurrentLocation>

        <RegisterCafe onClick={registerCafeHandler}>
          <InnerP itemProp={position}>등록하기</InnerP>
        </RegisterCafe>
      </ButtonFrame>
    </MainFrame>
  );
}
