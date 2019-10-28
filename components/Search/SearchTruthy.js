import styled from 'styled-components';

const Mainframe = styled.div`
  position: relative;
  top: 100px;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const SearchTruthy = ({ name, info, truthy }) => {
  if (name === '[id]') {
    name = "' '";
  }
  let noneResult;

  if (!truthy) {
    noneResult = (
      <div>
        <p style={{ position: 'relative', left: '5%' }}>
          {name}는/은 미지의 영역입니다.
        </p>
        <p style={{ position: 'relative', left: '5%' }}>
          새로운 지역을 개척해보세요.
        </p>
      </div>
    );
  }
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
