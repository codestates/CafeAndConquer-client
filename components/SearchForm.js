import Link from 'next/link';
import styled from 'styled-components';
import search from '../pages/search/[id]';

const Mainframe = styled.div`
  position: absolute;
  top: 120px;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  border: 1px solid black;
`;

const db = ['info1', 'info2', 'info3'];

const SearchForm = ({ name }) => {
  if (name === '[id]') {
    name = "' '";
  }
  let searchhResult;
  // 문제1. name 의 정보가 db에서 찾을 수 없을 때?
  if (!db.includes(name)) {
    searchhResult = (
      <p style={{ position: 'relative', left: '15%' }}>
        {name}의 검색 결과를 찾을 수 없습니다.
      </p>
    );
  }
  return (
    <Mainframe>
      <h1 style={{ position: 'relative', left: '15%' }}>
        {name}의 검색 결과입니다.
      </h1>
      {searchhResult}
    </Mainframe>
  );
};

export default SearchForm;
