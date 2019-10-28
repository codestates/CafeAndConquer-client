import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// css 질문 원석님

const Mainframe = styled.div`
  position: relative;
  top: 150px;
  height: 160px;
  left: 0%;
  width: 50%;
  overflow: hidden;
  border: 1px solid black;
`;

const Title = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 150px;
  width: 150px;
  text-align: center;
  border: 1px solid black;
`;

const Info = styled.div`
  position: absolute;
  top: 0px;
  left: 160px;
  height: 150px;
  width: 300px;
  overflow: scroll;
  border: 1px solid black;
`;

// 점령표시 어떻게 하나?
const SearchInfo = ({ info }) => {

  console.log(info);
  return (
    <div>
      {info.map((show) => (
        <Mainframe key={show.id}>
          <Title>{show.cafeName}</Title>
          <Info>
            <p>주소: {show.address}</p>
            <p>24시 영업: {show.open24Hour === 0 ? 'x' : 'o' }</p>
            <p>콘센트 양: {show.enoughOutlets === 'NORMAL' ? '보통' : '많음'}</p>
            {/* <p>점령자 닉네임: {show.user.nick}</p> */}
          </Info>
        </Mainframe>
      ))}
    </div>
  );
};

export default SearchInfo;
