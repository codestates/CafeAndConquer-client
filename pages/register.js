import React from 'react';
import Header from '../components/Header';

import { useRouter } from 'next/router';

const register = () => {
  const router = useRouter();
  console.log('lat : ', router.query.lat);
  console.log('lng : ', router.query.lng);

  
  return (
    <div>
      <Header />
      <h1 style={{ position: 'absolute', top: '15%' }}>
        레지스터 페이지 입니다.
      </h1>
    </div>
  );
};

export default register;
