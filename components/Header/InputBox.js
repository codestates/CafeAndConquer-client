import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePosition } from 'use-position';
import Router from 'next/router';

const SearchFrame = styled.div`
  position: relative;
  top: 0px;
  left: 20%;
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
  border-bottom: 3px solid black;
  font-size: 18px;
  color: white;
  background: url(https://s3-ap-northeast-1.amazonaws.com/dcicons/new/images/web/common/search@2x.png)
    no-repeat left;
  background-size: 40px;
  outline: none;

  &:focus {
    border-color: palevioletred;
  }
`;

const Button = styled.button.attrs({})`
  position: relative;
  top: 15px;
  left: 10px;
  width: 40px;
  height: 50px;
`;

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

const searchBtnHandler = (value, current) => {
  if (value === '') {
    // console.log(current);
  }
};

const InputBox = () => {
  let useSearch = useInput('');
  const { latitude, longitude, error } = usePosition();
  const position = {
    lat: latitude,
    lng: longitude,
    err: error,
  };
  let searchAddress = useSearch.value;
  if (useSearch.value === '') {
    searchAddress = '[address]';
  }
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      if (searchAddress !== '') {
        Router.push(`/search/${searchAddress}`);
      }
    }
  };
  return (
    <SearchFrame>
      <Search onKeyPress={handleKeyPress} {...useSearch} />
      <Link href="/search/[address]" as={`/search/${searchAddress}`}>
        <Button onClick={() => searchBtnHandler(useSearch.value, position)}>
          탐색
        </Button>
      </Link>
    </SearchFrame>
  );
};

export default InputBox;
