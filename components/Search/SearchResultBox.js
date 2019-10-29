import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// a link 로 점령
const Body = styled.div`
  position: relative;
  margin: 0 auto;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
`;

const Mainframe = styled.div`
  position: relative;
  height: 160px;
  width: 490px;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  /* border: 1px solid black; */
`;

const CafeNameBox = styled.a`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 130px;
  width: 150px;
  text-align: center;
  color: white;
  background: palevioletred;
  cursor: pointer;
  /* border: 1px solid black; */
`;

const CafeName = styled.p`
  position: relative;
  top: 12px;
`;

const CafeInfoBox = styled.div`
  position: relative;
  top: 0px;
  left: 165px;
  height: 130px;
  width: 300px;
  color: palevioletred;
  overflow: scroll;
  border: 3px solid palevioletred;
`;

const CafeInfo = styled.p`
  position: relative;
  top: 3px;
  left: 20px;
`;

// 점령표시 어떻게 하나?
const SearchResultBox = ({ info, truthy }) => {
  if (!truthy) {
    return <div></div>;
  }
  return (
    <Body>
      {info.map((show) => (
        <Mainframe key={show.id}>
          {/* 카페 박스를 눌렀을 때 점령하러가기 의도한대로 동작은 안 됨 */}
          <Link
            href={{
              pathname: '/',
              query: { lat: '35.8709422', lng: '128.5941623' },
            }}
          >
            <CafeNameBox>
              {/* 띄어쓰기 */}
              <CafeName>{show.cafeName.split(' ')[0]}</CafeName>
              <CafeName>{show.cafeName.split(' ')[1]}</CafeName>
            </CafeNameBox>
          </Link>
          <CafeInfoBox>
            <CafeInfo>주소: {show.address}</CafeInfo>
            <CafeInfo>24시 영업: {show.open24Hour === 0 ? 'X' : 'O'}</CafeInfo>
            <CafeInfo>
              콘센트 양: {show.enoughOutlets === 'NORMAL' ? '보통' : '많음'}
            </CafeInfo>
          </CafeInfoBox>
        </Mainframe>
      ))}
    </Body>
  );
};

export default SearchResultBox;
