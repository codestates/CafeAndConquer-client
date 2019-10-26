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
  console.log(props.info)
  let twentyFour = '영업';
  let concent = '충분함'
  if(!props.info.open24Hour) {
    twentyFour = '비영업';
  }
  if(props.info.enoughOutlets === "NORMAL") {
    concent = '보통'
  }
  return (
    <div>
      <Mainframe>
        <Title>
          <p>
            {props.info.cafeName}
          </p>
        </Title>
        <Info>
          <p>{props.address}</p>
          <p>24시 영업 : {twentyFour}</p>
          <p>콘센트 : {concent}</p>
          <p>점령자 닉네임 : {props.info.user.nick}</p>
        </Info>
      </Mainframe>
      {test}
    </div>
  );
};

export default SearchInfo;
