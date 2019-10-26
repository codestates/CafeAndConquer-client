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
  const cafeInfo = '7968405';
  const res = await axios.get(`http://18.221.57.226:8080/api/cafe/${cafeInfo}`);
  const data = await res.data;

  return { cafes: data.map( entry => entry.data) };
};

export default Index;
