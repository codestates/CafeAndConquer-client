import styled from 'styled-components';
import { usePosition } from 'use-position';
import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import Popup from 'reactjs-popup';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    // Destructuring assignment
    // evnt.target.value
    const {
      target: { value },
    } = event;
    setValue(value);
  };
  return { value, onChange };
};

// 문제2. 현재 위치를 어떻게 넘겨줄 것인가?
const searchBtnHandler = (value, current) => {
  if (value === '') {
    console.log(current);
  }
};

const Header = () => {
  let useSearch = useInput('');
  const { latitude, longitude, error } = usePosition();
  const position = {
    lat: latitude,
    lng: longitude,
    err: error,
  };

  let searchAddress = useSearch.value;
  if (useSearch.value === '') {
    searchAddress = '[id]';
  }

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      if (useSearch.value !== '') {
        Router.push(`/search/${useSearch.value}`);
      }
    }
  };

  return (
    <MainFrame>
      <Link href="/">
        <Logo>C&C</Logo>
      </Link>
      <SearchFrame>
        {/* 비구조화 할당 // 노마드코더 */}
        <Search onKeyPress={handleKeyPress} {...useSearch} />
        <Link href="/search/[id]" as={`/search/${searchAddress}`}>
          {/* 위도 정보, 검색  정보  넘기기? */}
          <Button onClick={() => searchBtnHandler(useSearch.value, position)}>
            탐색
          </Button>
        </Link>
      </SearchFrame>
      <TopMenuBtton>
        {/* 의문1. link를 감싸는 방법을 왜 써야하며 다른 방법은 없는가? */}
        <Link href="/sign">
          <Popup trigger={<button> Sign</button>} position="right center">
            <div >Popup content here !!</div>
          </Popup>
        </Link>
        <Link href="/login">
          <a style={{ padding: '10px' }}>login</a>
        </Link>
      </TopMenuBtton>
    </MainFrame>
  );
};

const MainFrame = styled.div`
  position: fixed;
  height: 100px;
  max-width: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: lightgray;
  z-index: 10;
  /* border: 1px solid black; */
`;

const Logo = styled.a`
  position: relative;
  top: 18%;
  left: 3%;
  font-family: Monospace, Helvetica, sans-serif;
  position: absolute;
  font-size: 3.4rem;
  text-decoration: none;
`;

const SearchFrame = styled.div`
  position: relative;
  top: 10%;
  left: 25%;
  width: 50%;
  height: 70px;
 
`;

const Search = styled.input.attrs({
  placeholder: '지역 또는 카페 탐색하기',
  type: 'text',
})`
  position: relative;
  top: 20%;
  width: 70%;
  padding-left: 45px;
  height: 44px;
  border: 0px;
  border: 3px solid #ff7f00;
  font-size: 18px;
  color: #ff7f00;
  background: url(https://s3-ap-northeast-1.amazonaws.com/dcicons/new/images/web/common/search@2x.png)
    no-repeat left;
  background-size: 40px;
  outline: none;

  &:focus {
    border-color: blue;
  }
`;

const Button = styled.button.attrs({})`
  position: relative;
  top: 15%;
  width: 40px;
  height: 50px;
`;

const TopMenuBtton = styled.div`
  position: absolute;
  top: 35%;
  left: 70%;
  height: 30px;
  width: 25%;
  /* border: 1px solid black; */
  text-align: center;
`;

export default Header;