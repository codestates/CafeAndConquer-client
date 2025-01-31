import styled from 'styled-components';
import React from 'react';
import { usePosition } from 'use-position';
import Link from 'next/link';
import Router from 'next/router';
import Header from '../components/Header';

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

const MainLogo = styled.h1`
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

const MainInfo = styled.h2`
  font-family: Monospace, Helvetica, sans-serif;
  position: relative;
  font-size: 2.5rem;
  color: black;
  width: 100%;
  top: 45%;
  margin: 0 auto;
  text-align: center;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
`;

const ButtonFrame = styled.div`
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
  const position = {
    lat: latitude,
    lng: longitude,
    err: error,
  };
  const currentLocationHandler = (current) => {
    console.log(current);
  };

  // 위도 , 경도
  const registerCafeHandler = () => {
    //dapi.kakao.com/v2/local/search/address.json
    https: Router.push({
      pathname: '/register',
      query: { lat: position.lat, lng: position.lng },
    });
  };

  return (
    <div>
      <Header />
      <MainFrame>
        <MainLogo>Cafe&Conqeur</MainLogo>
        <MainInfo>카페를 발견하고 등록하세요</MainInfo>

        <ButtonFrame>
          {/* link 사용법에 대해서 공부하기 */}
          <Link href="/search/[id]">
            <CurrentLocation onClick={() => currentLocationHandler(position)}>
              <InnerP>가까운 카페</InnerP>
            </CurrentLocation>
          </Link>
          <RegisterCafe onClick={registerCafeHandler}>
            <InnerP itemProp={position}>등록하기</InnerP>
          </RegisterCafe>
        </ButtonFrame>
      </MainFrame>
    </div>
  );
}
