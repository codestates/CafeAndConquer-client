import Link from 'next/link';
import Header from '../components/Header';
import BasicInfo from '../components/BasicInfo';

const Index = () => {
  console.log(process.env.KAKAO_LOGIN_KEY);
  return (
    <div>
      <Header />
      <BasicInfo />
    </div>
  );
}

export default Index;
