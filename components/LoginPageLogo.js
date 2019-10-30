import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.div`
  position: absolute;
  height: 80px;
  max-width: 100%;
  width: 100%;
  top: 0;
  left: 0;
  border-bottom: 1px solid gray;
  /* z-index: 10; */
`;

const MainLogo = styled.h1`
  font-family: Monospace, Helvetica, sans-serif;
  position: absolute;
  font-size: 2.5rem;
  color: black;
  width: 100%;
  top: 15%;
  margin: 0 auto;
  text-align: center;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
`;

const LoginPageHeader = () => {
  return (
    <div>
      <Header>
        <Link href="/">
          <MainLogo>Cafe & Conquer</MainLogo>
        </Link>
      </Header>
    </div>
  );
};

export default LoginPageHeader;
