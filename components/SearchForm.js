import Link from 'next/link';
import styled from 'styled-components';
import search from '../pages/search/[id]';

const Mainframe = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-bottom: 1px solid black;
`;

const db = ['info1', 'info2', 'info3'];

const SearchForm = (props) => {
  let name = props.name;

  // 작동 안 됨
  if (name === '[id]') {
    name = "' '";
  }
  let searchhResult;

  if (!db.includes(props.name)) {
    searchhResult = (
      <p style={{ position: 'relative', left: '5%' }}>
        {name}의 검색 결과를 찾을 수 없습니다.
      </p>
    );
  }
  return (
    <Mainframe>
      <h3 style={{ position: 'relative', left: '5%' }}>
        {name}의 검색 결과입니다.
      </h3>
      {searchhResult}
    </Mainframe>
  );
};

export default SearchForm;
