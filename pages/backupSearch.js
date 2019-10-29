import axios from 'axios';
import Link from 'next/link';

const Index = (props) => {
  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

Index.getInitialProps = async function(address) {
  const { id } = address.query;
  console.log(id);

  let query = '강남역';
  const res = await axios({
    method: 'get',
    url: 'https://dapi.kakao.com/v2/local/search/address.json',
    params: { query: '강남역' },
    headers: { Authorization: `KakaoAK ${process.env.KAKAO_ADDRESS_KEY}` },
  });
  const data = await res.data;
  console.log(data);
  const lat = data.documents[0].y;
  const lng = data.documents[0].x;

 
  return 1;
};

export default Index;
