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

const SearchInfo = ({ info }) => {
  console.log(info.map((name) => name.cafeName));
  return (
    <div>
      {info.map((show) => (
        <Mainframe key={show.id}>
          <Title>{show.cafeName}</Title>
        </Mainframe>
      ))}
    </div>
  );
};

export default SearchInfo;
