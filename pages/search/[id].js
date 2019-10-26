import React from 'react';
import Header from '../../components/Header';
import SearchTruthy from '../../components/Searches/SearchTruthy';
import SearchInfo from '../../components/Searches/SearchInfo';
import { useRouter } from 'next/router';

import axios from 'axios';

const search = (props) => {
  const router = useRouter();
  // const currentLocation = [router.query.lat, router.query.lng];
  // console.log('search test: ', currentLocation)
  
  return (
    <div>
      <Header />
      <SearchTruthy name={router.query.id} />
      {/* SearchTruhty의 boolean 값에 따라 SearchInfo */}
      <SearchInfo info={props.cafes}/>
    </div>
  );
};

search.getInitialProps = async function() {
  //props.cafeInfo 로 변경될 거 같다
  //숫자를 어떻게 받아 올 것인가?
  const cafeInfo = '7968405';
  const res = await axios.get(`http://18.221.57.226:8080/api/cafe/${cafeInfo}`);
  const data = await res.data;
  
  return {cafes : data.data.cafe};
};


export default search;
