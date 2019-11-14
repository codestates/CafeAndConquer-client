import React from 'react';
import Header from '../../components/Header';
import SearchResultMessage from '../../components/SearchResult/SearchResultMessage';
import SearchResultBox from '../../components/SearchResult/SearchResultBox';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from 'styled-components';

// 카페 별 점령까지 완료
import '../../style.scss';

const Background = styled.div`
  font-family: Monospace, Helvetica, sans-serif;
  color: black;
  overflow: scroll;
`;

const address = ({ cafes, truthy }) => {
  const router = useRouter();

  return (
    <Background>
      <Header />
      <SearchResultMessage
        name={router.query.address}
        info={cafes}
        truthy={truthy}
      />
      <SearchResultBox info={cafes} truthy={truthy} />
    </Background>
  );
};

address.getInitialProps = async function(comment) {
  // getInitialProps에서 query를 받는 방법

  const { address } = comment.query;

  // 주소 -> 위도, 경도 (geocode)
  const res = await axios({
    method: 'get',
    url: 'https://dapi.kakao.com/v2/local/search/address.json',
    params: { query: address },
    headers: { Authorization: `KakaoAK ${process.env.KAKAO_ADDRESS_KEY}` },
  });
  const geocode = await res.data;

  let lat = '37.566826005485716';
  let lng = '126.9786567859313';
  let truthy = false;
  if (address === '[address]') {
    truthy = false;
  }

  if (geocode.meta.total_count !== 0) {
    lat = geocode.documents[0].y;
    lng = geocode.documents[0].x;
    truthy = true;
  }

  // 가까운 카페 검색시
  // 근처 카페 등록 후 검증이 필요함
  if (address === '근처') {
    lat = comment.query.lat;
    lng = comment.query.lng;
  }

  const res2 = await axios({
    method: 'post',
    url: 'http://18.221.57.226:8080/api/cafe/search',
    headers: {},
    data: {
      latitude: lat,
      longitude: lng,
      maxDistance: 1000,
    },
  });
  const cafes = await res2.data;

  if (cafes.data.length === 0) {
    truthy = false;
  }
  // Search로 return을 해줌
  return { cafes: cafes.data.map((cafes) => cafes), truthy };
};

export default address;
