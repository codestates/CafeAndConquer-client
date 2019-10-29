import React from 'react';
import Header from '../../components/Header';
import SearchResultMessage from '../../components/Search/SearchResultMessage';
import SearchResultBox from '../../components/Search/SearchResultBox';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from 'styled-components';

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
      {/* search 네임 -> searchbox */}
      <SearchResultMessage
        name={router.query.address}
        info={cafes}
        truthy={truthy}
      />
      <SearchResultBox info={cafes} truthy={truthy} />
    </Background>
  );
};

// getinit역할 정확하게 파악하기, 초기에만 불리는지?
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
  console.log('test gecode', geocode);

  let lat = '37.566826005485716';
  let lng = '126.9786567859313';
  let truthy = false;
  if (address === '[address]') {
    truthy = false;
  }
  // console.log('check count: ', geocode.meta.total_count)

  // 2. api key 노출 확인하기 [network js, source]
  // process.env 로 해결할 수 있음

  // 리다이렉트 location 확인 해보기

  // 코드 동작 잘하는지 한 번 더
  if (geocode.meta.total_count !== 0) {
    lat = geocode.documents[0].y;
    lng = geocode.documents[0].x;
    truthy = true;
  }

  // 위도, 경도 -> 점령된 카페 표시
  // 점령을 수동으로 하면 아직 500 error가 남
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

  console.log(cafes);

  // Search로 return을 해줌
  return { cafes: cafes.data.map((cafes) => cafes), truthy };
};

export default address;
