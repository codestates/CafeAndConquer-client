import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import { useRouter } from 'next/router';

const search = (props) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <SearchForm name={router.query.id} />
    </div>
  );
};

export default search;
