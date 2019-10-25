import React from 'react';
import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import { useRouter } from 'next/router';

const search = (props) => {
  const router = useRouter();
  const currentLocation = [router.query.lat, router.query.lng];


  return (
    <div>
      <Header />
      <SearchForm name={router.query.id} />
    </div>
  );
};

export default search;
