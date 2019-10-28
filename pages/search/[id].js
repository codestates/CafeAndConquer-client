import React from 'react';
import Header from '../../components/Header';
import SearchTruthy from '../../components/Search/SearchTruthy';
import SearchInfo from '../../components/Search/SearchInfo';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';

const Search = (props) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      {/* <SearchTruthy name={router.query.id} info={props.cafes}/> */}
      <SearchInfo info={props.cafes} />
    </div>
  );
};

Search.getInitialProps = async function(address) {
  const { id } = address.query;
  console.log('query id ok', id);

  const res = await axios({
    method: 'get',
    url: 'https://dapi.kakao.com/v2/local/search/address.json',
    params: { query: id },
    headers: { Authorization: `KakaoAK ${process.env.KAKAO_ADDRESS_KEY}` },
  });
  const geocode = await res.data;
  console.log('test gecode', geocode);

  let lat = geocode.documents[0].y;
  let lng = geocode.documents[0].x;

  // let lat = '37.566826005485716'
  // let lng = '126.9786567859313'

  const res2 = await axios({
    method: 'post',
    url: 'http://18.221.57.226:8080/api/cafe/search',
    headers: {},
    data: {
      latitude: lat,
      longitude: lng,
      maxDistance: 10000,
    },
  });
  const cafes = await res2.data;

  return { cafes: cafes.data.map((cafes) => cafes) };
};

export default Search;