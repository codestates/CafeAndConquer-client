import React from 'react';
import Header from '../../components/Header';
import SearchTruthy from '../../components/Searches/SearchTruthy';
import SearchInfo from '../../components/Searches/SearchInfo';
import { useRouter } from 'next/router';

const search = (props) => {
  const router = useRouter();
  // const currentLocation = [router.query.lat, router.query.lng];
  // console.log('search test: ', currentLocation)

  return (
    <div>
      <Header />
      <SearchTruthy name={router.query.id} />
      {/* SearchTruhty의 boolean 값에 따라 SearchInfo */}
      <SearchInfo />
    </div>
  );
};

export default search;
