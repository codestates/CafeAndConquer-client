import React from 'react';
import Header from '../../components/Header';
import SearchTruthy from '../../components/Search/SearchTruthy';
import SearchInfo from '../../components/Search/SearchInfo';
import { useRouter } from 'next/router';
import Home from '../../pages/index';
import Router from 'next/router';

import axios from 'axios';

const search = (props) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      {/* <SearchTruthy name={router.query.id} info={props.cafes}/> */}
      <SearchInfo info={props.cafes} />
    </div>
  );
};

search.getInitialProps = async function(address) {
  const { id } = address.query;
  const res = await axios({
    method: 'get',
    url: 'https://dapi.kakao.com/v2/local/search/address.json',
    params: { query: id },
    // process env
    headers: { Authorization: `KakaoAK ${process.env.KAKAO_ADDRESS_KEY}` },
  });
  const geocode = await res.data;
  // 서버 500 번일 때 기본 값 되게 하는 법
  // 전체를 불러오는 건 어떨까?
  let lat = '126.9786567859313';
  let lng = '37.566826005485716';

   console.log(geocode)
  lat = geocode.documents[0].y;
  lng = geocode.documents[0].x;

  
  console.log('test gecode', lat);
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


  return { cafes: cafes.data.map((cafes) => cafes) };
};

export default search;
