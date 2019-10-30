import styled from 'styled-components';
import React from 'react';
import { usePosition } from 'use-position';
import Link from 'next/link';
import Router from 'next/router';

const MainFrame = styled.div`
  position: absolute;
  top: 14%;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-image: url('https://images.unsplash.com/photo-1422207049116-cfaf69531072?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80');
  background-repeat: no-repeat;
  z-index: 0;
  /* display:block;
  overflow:hidden; */
`;

const MainLogo = styled.h1`
  font-family: Monospace, Helvetica, sans-serif;
  position: absolute;
  font-size: 4.5rem;
  color: black;
  width: 100%;
  top: 15%;
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
  top: 35%;
  margin: 0 auto;
  text-align: center;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
`;

const CurrentLocation = styled.button.attrs({})`
  position: absolute;
  top: 50%;
  left: 23%;
  width: 25%;
  height: 25%;
`;

const RegisterCafe = styled.button`
  position: absolute;
  top: 50%;
  right: 23%;
  width: 25%;
  height: 25%;
  /* display: block; */
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

  const registerCafeHandler = () => {
    Router.push({
      pathname: '/register',
      query: { lat: position.lat, lng: position.lng },
    });
  };

  // useEffect(()=> {
  //   registerCafeHandler()
  // }, [position.lat, position.lng])

  return (
    <MainFrame>
      <MainLogo>Cafe&Conqeur</MainLogo>
      <MainInfo>카페를 발견하고 등록하세요</MainInfo>
      <ul>
        {/* link 사용법에 대해서 공부하기 */}
        <Link href="/search/[id]">
          <CurrentLocation onClick={() => currentLocationHandler(position)}>
            가까운 카페
          </CurrentLocation>
        </Link>
        <RegisterCafe onClick={registerCafeHandler}>
          <a itemProp={position}>등록하기</a>
        </RegisterCafe>
      </ul>
    </MainFrame>
  );
}
