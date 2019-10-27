
import styled from 'styled-components';
import Link from 'next/link';

const Logo = styled.a`
  position: relative;
  top: 18%;
  left: 3%;
  font-family: Monospace, Helvetica, sans-serif;
  position: absolute;
  font-size: 3.4rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

// const BacktoHome = () => {
//   console.log('BTH is Ok');
//   setInterval(() => {
//     console.log('a');
//     Router.push('/');
//   }, 1000);
// };

// 
const LogoImage = () => {
  return (
    <Link href="/">
      <Logo>C&C</Logo>
    </Link>
  );
};

export default LogoImage;
