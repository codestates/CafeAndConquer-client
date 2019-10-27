import Header from '../components/Header';
import BasicInfo from '../components/BasicInfo';
// style.scc 지우면 로고 정상작동 대신 용규님 작업이 작동 오류
// import '../style.scss';

const Index = () => {
  return (
    <div>
      <Header />
      <BasicInfo />
    </div>
  );
};

export default Index;
