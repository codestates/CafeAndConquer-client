import Link from 'next/link';
import styled from 'styled-components';

const Mainframe = styled.div`
  position: relative;
  top: 100px;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const db = ['info1', 'info2', 'info3'];

const SearchTruthy = ({ name }) => {
  if (name === '[id]') {
    name = "' '";
  }
  let noneResult;

  // if (!db.includes(name)) {
  //   noneResult = (
  //     <p style={{ position: 'relative', left: '5%' }}>
  //       {name}의 검색 결과를 찾을 수 없습니다.
  //     </p>
  //   );
  // }
  return (
    <Mainframe>
      <h3 style={{ position: 'relative', left: '5%' }}>
        {name}의 검색 결과입니다.
      </h3>
      {noneResult}
    </Mainframe>
  );
};

export default SearchTruthy;
