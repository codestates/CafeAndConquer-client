import axios from 'axios';

const Index = (props) => {
  console.log(props.cafes);
  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

Index.getInitialProps = async function() {
  // 더미 데이터라서 한 개가 들어감
  // 최대 10개의 데이터를 받음
  const cafeInfo = '7968405';
  // 주소를 쳤을 때, 위도 경도를 확인하고,
  // 서버 쪽에 500m 정도 반경을 기준으로
  // 서버에 위도 경도 반경을 보낸다
  // 카페이름검색은 이야기 하지 않음 [보류, 혹은 어드밴스

  const res = await axios.get(`http://18.221.57.226:8080/api/cafe/${cafeInfo}`);
  const data = await res.data;
  
  return {cafes : data.data.cafe};
};

export default Index;
