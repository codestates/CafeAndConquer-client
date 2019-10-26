import React from 'react';
import styled from 'styled-components';

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
  overflow:scroll;
  border: 1px solid black;
`;

let test = ['hi', 'hello', 'how are you?'].map((e,i) => (
  <Mainframe key={i}>{e}</Mainframe>
));

const SearchInfo = (props) => {
  return (
    <div>
      <Mainframe>
        <Title>
          <p>
            투썸플레이스 대구
          </p>
        </Title>
        <Info>
          <p>산격4동 1498-199</p>
          <p>7:00 ~ 23:00 open</p>
          <p>콘센트 ***</p>
          <p>아늑함 · 캐주얼 · 단체석</p>
        </Info>
      </Mainframe>
      {test}
    </div>
  );
};

export default SearchInfo;
