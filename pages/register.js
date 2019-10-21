import React, { useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';

const kakaoMapMaker = () => {
  var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(35.8936485, 128.6054845), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  // 마커가 표시될 위치입니다
  var markerPosition = new kakao.maps.LatLng(35.8936485, 128.6054845);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
};

const register = () => {
  // useEffect //
  // setTimeout으로 해야하나?

  useEffect(kakaoMapMaker, []);

  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d5e657e1fa81426b856c66d594cb54ce&libraries=services,clusterer,drawing,places"
        ></script>
      </Head>
      <Header />
      <h1 style={{ position: 'absolute', top: '15%' }}>
        레지스터 페이지 입니다.
      </h1>
      <Map />
    </div>
  );
};

const Map = styled.div.attrs({ id: 'map' })`
  position: absolute;
  top: 30%;
  left: 30%;
  width: 40%;
  height: 40%;
  border: 1px solid black;
`;

export default register;
