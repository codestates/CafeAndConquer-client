import Header from '../components/Header';
import BasicInfo from '../components/BasicInfo';
// style.scc 지우면 로고 정상작동 대신 페어분의 작업이 작동 안 됨
import '../style.scss';

const Index = () => {
  return (
    <div>
      <Header />
      <BasicInfo />
    </div>
  );
};

export default Index;
