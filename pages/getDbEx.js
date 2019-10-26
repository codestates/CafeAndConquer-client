
import axios from 'axios'
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <div>
    <h1>test</h1>
    
  </div>
);

Index.getInitialProps = async function() {
  const cafeInfo = '7968405'
  const res = await axios.get(`http://18.221.57.226:8080/api/cafe/${cafeInfo}`)
   const data = await res.data;
  console.log(data)
  return '123'
};

export default Index;
