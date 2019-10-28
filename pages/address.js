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

  let query = '강남';
  const res = await axios({
    method: 'get',
    url: 'https://dapi.kakao.com/v2/local/search/address.json',
    params: { query: query || id },
    headers: { Authorization: `KakaoAK 2a3ab01651c3fe8a74eeea7a7ce7c0a7` },
  });
  const data = await res.data;
  console.log(data)
  const lat = data.documents[0].y;
  const lng = data.documents[0].x;
  return { lat: lat, lng: lng };
};

export default Index;
