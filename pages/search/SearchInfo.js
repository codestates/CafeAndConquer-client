import React from 'react';
import styled from 'styled-components';

const Mainframe = styled.div`
  position: relative;
  top: 150px;
  height: 160px;
  left: 10;
  width: 100%;
  /* overflow: hidden; */
  border: 1px solid black;
`;

const TextFrame = styled.div`   
    position: absolute;
    top: 0px;
    left: 0px;
    height: 150px;
    width: 150px;
    text-align: center;
    border: 1px solid black;
`

let test = ['hi', 'hello', 'how are you?'].map(i => (<Mainframe>{i}</Mainframe>
))


const SearchInfo = (props) => {
  return (
    <div>
        <Mainframe>
            <TextFrame>
              <span style={{verticalAlign: 'middle'}}>서울 카페</span>
            </TextFrame>
        </Mainframe>
        {test}
    </div>
  );
};

export default SearchInfo;
